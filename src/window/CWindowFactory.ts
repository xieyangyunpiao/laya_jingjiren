/*
* tang 界面管理;
*/
class CWindowFactory
{
    private static $inst:CWindowFactory = null;
    private static $open:boolean = false;
    private $resTimer:any = 180000;//界面资源释放时间（目前3分钟检查一次）
    private $winDic:Laya.Dictionary;
    constructor()
    {
      if(false == CWindowFactory.$open)
      {
          throw Error("错误实例化CWindowFactory,请通过CWindowFactory.inst实例化")
      }
      this.$winDic = new Laya.Dictionary();
      Laya.timer.loop(this.$resTimer,this,this.windResRelease);
      CWindowFactory.$inst = this;
    }

    public static get inst():CWindowFactory
    {
        null == CWindowFactory.$inst && false == CWindowFactory.$open ? (CWindowFactory.$open = true) && new CWindowFactory():0
        return CWindowFactory.$inst;
    }
   /**
    * 通过界面ID返回对应界面
    * @param winID 界面ID
    */
    public getWindowByID(winID:any)
    {
       if(null == this.$winDic.get(winID))
       this.$winDic.set(winID,new window[winID]())
       return this.$winDic.get(winID);
    }
   /**
    * 根据时间进行窗口资源的释放
    */
    private windResRelease()
    {
      let aveOpenNum:any=0;//平均打开次数
      for(let i = 0; i < this.$winDic.keys.length;i++)
      {
          let win:CWindow = this.$winDic.get(this.$winDic.keys[i]);
          aveOpenNum+=win.winOpenNum
      }
      aveOpenNum = Math.floor(aveOpenNum/this.$winDic.keys.length);
      for(let j = 0; j < this.$winDic.keys.length;j++)
      {
          let win:CWindow = this.$winDic.get(this.$winDic.keys[j]);
          //=======界面资源释放:界面没有打开，打开次数小于所有界面的平均值，权重值为普通界面，距离上次打开超过1分钟========
          if(false == win.windOpen && win.winOpenNum < aveOpenNum && 1 != win.winValue && new Date().getTime()-win.winOpenTimer >= 60000)
          {
              CEventManager.inst.dispatchEvent(Core.inst.layer,WindowEvent.WINDOW_RESOURCE_RELEASE,[CLayerMananger.LayaerType_Window,win.windID]);
              Core.inst.resource.JsonResRelase(win.winResUrl);
              this.$winDic.remove(this.$winDic.keys[j])
              CUtil.Log("释放窗口:"+win.windID)
              win.destroy(true);
              win = null;
          }
      }
    }
 /**
  * 更具权重主动释放资源
  */
    public destroyWindow(windID:any)
    {
        let win:CWindow = this.$winDic.get(windID);
        CEventManager.inst.dispatchEvent(Core.inst.layer,WindowEvent.WINDOW_RESOURCE_RELEASE,[CLayerMananger.LayaerType_Window,win.windID]);
        Core.inst.resource.JsonResRelase(win.winResUrl);
        this.$winDic.remove(windID)
        CUtil.Log("释放窗口:"+windID)
        win.destroy(true);
        win = null;
    }
    /**
     * 通过窗口ID判断某个窗口是否打开
     */
    public isOpenWindowByID(id:any):boolean
    {
        let isopen:boolean = false;
        let wind:CWindow = null;
        wind = this.$winDic.get(id);
        wind && (true == wind.windOpen) && (isopen = true);
        return false;
    }
}