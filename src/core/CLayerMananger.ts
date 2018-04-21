/*
* 层级管理;
*/
class CLayerMananger extends Laya.Sprite
{

    public static LayaerType_Window:any="window";
    public static LayaerType_Dialog:any ="Dialog";
    public static LayaerType_Effect:any ="effect";
    public static LayaerType_Role:any = "role";
    public static LayaerType_Npc:any = "npc";
    public static LayaerType_Map:any = "map";
    public static LayaerType_Navigat:any="navigat"

    private $topContaion:Laya.Sprite = new Laya.Sprite();//上层
    private $windowContaion:Laya.Sprite = new Laya.Sprite();//界面层;
    private $dialogContaion:Laya.Sprite = new Laya.Sprite();//弹窗层
    private $navigationContaion:Laya.Sprite = new Laya.Sprite();//導航層
    private $effectContaion:Laya.Sprite = new Laya.Sprite();//特效层

    private $midContaion:Laya.Sprite = new Laya.Sprite();//中层
    private $npcContaion:Laya.Sprite = new Laya.Sprite();//npc层
    private $roleContaion:Laya.Sprite = new Laya.Sprite();//角色层
    
    private $downContaion:Laya.Sprite = new Laya.Sprite();//下层
    private $mapContaion:Laya.Sprite  = new Laya.Sprite();//地图层

    private $LayaDic:Laya.Dictionary;//层级映射表
    
    private static $inst:CLayerMananger =null;
    private static $open:boolean = false;
    constructor()
    {
      super();
      if(false == CLayerMananger.$open)
      {
          throw Error("错误实例化CLayerMananger,请通过CLayerMananger.inst实例化")
      }
      this.$LayaDic = new Laya.Dictionary();
      this.$LayaDic.set(CLayerMananger.LayaerType_Window,new Laya.Dictionary());
      this.$LayaDic.set(CLayerMananger.LayaerType_Dialog,new Laya.Dictionary());
      this.$LayaDic.set(CLayerMananger.LayaerType_Effect,new Laya.Dictionary());
      this.$LayaDic.set(CLayerMananger.LayaerType_Role,new Laya.Dictionary());
      this.$LayaDic.set(CLayerMananger.LayaerType_Npc,new Laya.Dictionary());
      this.$LayaDic.set(CLayerMananger.LayaerType_Map,new Laya.Dictionary());
      this.$LayaDic.set(CLayerMananger.LayaerType_Navigat,new Laya.Dictionary());
      this.addChild(this.$downContaion);
      this.$downContaion.addChild(this.$mapContaion);
      this.addChild(this.$midContaion);
      this.$midContaion.addChild(this.$npcContaion);
      this.$midContaion.addChild(this.$roleContaion);
      this.addChild(this.$topContaion);
      this.$topContaion.addChild(this.$windowContaion);
      this.$topContaion.addChild(this.$dialogContaion);
      this.$topContaion.addChild(this.$navigationContaion);
      this.$topContaion.addChild(this.$effectContaion);
      CEventManager.inst.registerEvent(this,this,WindowEvent.WINDOW_RESOURCE_RELEASE,this.resourceReleaseFun)
      Laya.Stat.onclick = this.clickStataCallFun.bind(this)
      CLayerMananger.$inst = this;
    }

    private clickStataCallFun()
    {
        CUtil.Log("當前存在的頁面:")
        for(let i = 0;i < this.$windowContaion.numChildren;i++)
        {
            let wnd:CWindow = this.$windowContaion.getChildAt(i) as CWindow;
            CUtil.Log(wnd.windID)
        }
    }
 
    /**
     * 打開導航
     */
    public openNavigation(id:any,data:any=null,location:Laya.Point = null)
    {
       let nagivaDic:Laya.Dictionary = this.$LayaDic.get(CLayerMananger.LayaerType_Navigat);
       let nagivatorWnd:CNagivator;
       if(null == nagivaDic.get(id))
      {
       nagivaDic.set(id,Core.inst.nagivatoryFactory.getNagivator(id))
       nagivatorWnd = nagivaDic.get(id);
       nagivatorWnd.windID = id;
      }
      else
      {
      nagivatorWnd = nagivaDic.get(id);
      nagivatorWnd.globalInit();
      }
      nagivatorWnd.data = data;
      nagivatorWnd.windOpen = true;
      this.$navigationContaion.addChild(nagivatorWnd);
      if(null == location)
      {
      nagivatorWnd.x = (GameConfig.STAGE_WIDTH>>1) - (nagivatorWnd.width>>1);
      nagivatorWnd.y = (GameConfig.STAGE_HEIGHT>>1) - (nagivatorWnd.height>>1)
      }
      else
      {
        nagivatorWnd.x  = location.x;
        nagivatorWnd.y  = location.y;
      }
      nagivaDic = null;
      nagivatorWnd = null;
    }

    /**
     * 關閉導航
     */
    public closeNavigation(id:any)
    {
       let nagivaDic:Laya.Dictionary = this.$LayaDic.get(CLayerMananger.LayaerType_Navigat);
       let nagivatorWnd:CNagivator = nagivaDic.get(id);
       if(nagivatorWnd == null || false == this.$navigationContaion.contains(nagivatorWnd))
       return ;
       nagivatorWnd.windOpen = false;
       this.$navigationContaion.addChild(nagivatorWnd);
       nagivatorWnd = null;
       nagivaDic = null;
    }
    /**
     * 關閉所有導航
     */
    public closeAllNavigation()
    {
        for(;this.$navigationContaion.numChildren>0;)
        {
         let nagivatorWnd:CNagivator = this.$navigationContaion.getChildAt(0) as CNagivator;
         nagivatorWnd.windOpen = false;
         this.$navigationContaion.removeChildAt(0);
         nagivatorWnd = null;
        }
    }
    /**
     * 替換導航
     */
    public swapNavigation()
    {

    }
    public static get inst():CLayerMananger
    {
        null == CLayerMananger.$inst && false == CLayerMananger.$open ? (CLayerMananger.$open = true) && new CLayerMananger() :0
        return CLayerMananger.$inst;
    }
    /**
     *通过界面ID得到相应的界面
     */
    public openWindowByID(winid:any,data:any=null,closeotherWnd:boolean=true,location:Laya.Point = null):boolean
    {   
        closeotherWnd && this.closeAllWindow();
        if(true == CWindow.$winResLoadBool)
        {
            CUtil.Log("正有页面资源正在加载，请稍后再试")
            return false;
        }
        let winDic:Laya.Dictionary = this.$LayaDic.get(CLayerMananger.LayaerType_Window);
        let win:CWindow;
        if(null == winDic.get(winid))
        {
        winDic.set(winid,Core.inst.wndFactory.getWindowByID(winid));
        win =winDic.get(winid);
        win.windID = winid;
        }
        else
        {
        win =winDic.get(winid);    
        win.globalInit();
        }
        if(true == win.windOpen)//界面已经打开
        return false;
        win.data = data;
        win.windOpen = true;
        win.winOpenNum = win.winOpenNum+1;
        this.$windowContaion.addChild(win);
        if(null != location)
        {
            win.x = location.x;
            win.y = location.y;
        }
        else
        {
            win.x = (GameConfig.STAGE_WIDTH>>1)-(win.width>>1);
            win.y = (GameConfig.STAGE_HEIGHT>>1)-(win.height>>1)
        }
        winDic  = null;
        win = null;
        return true;
    }
    /**
     * 打開地圖界面
     */
    public openMapWindow():void 
    {

    }
   /**
    * 關閉地圖界面
    */
    public closeMapWindow():void 
    {

    }
    /**
     * 根据界面ID关闭相应的界面
     * @param winid 界面ID
     */
    public closeWindowByID(winid:any):boolean
    {   
        if(true == CWindow.$winResLoadBool)
        {
            CUtil.Log("正有页面资源正在加载，请稍后再试")
            return false;
        }
        let winDic:Laya.Dictionary = this.$LayaDic.get(CLayerMananger.LayaerType_Window);
        let win:CWindow;
        if(null == winDic.get(winid))
        {
            return false;
        }
        else
        {
            win = winDic.get(winid);
            if(false == win.windOpen)//界面已经关闭
            return false;
            win.winOpenTimer = new Date().getTime();//重置窗口的打开时间
            this.$windowContaion.removeChild(win);
            win.controlRecover();//窗口控件的回收
            win.windOpen = false;//打开状态设置为未打开
            if(CWindow.WINDOW_TYPE_GARBAGE == win.winValue)//如果是立即销毁界面
            Core.inst.wndFactory.destroyWindow(win.windID);
        }
        winDic  = null;
        win = null;
        return true;
    }
    /**
     * 关闭所有界面
     */
    public closeAllWindow():boolean
    {
        if(true == CWindow.$winResLoadBool)
        {
            CUtil.Log("正有页面资源正在加载，请稍后再试")
            return false;
        }
        let winDic:Laya.Dictionary = this.$LayaDic.get(CLayerMananger.LayaerType_Window);
        for(let i = 0 ;i <  winDic.keys.length;i++)
        {
            let win:CWindow = winDic.get(winDic.keys[i])
             if(true == win.windOpen && true == win.isWinClose)
             {   
                win.windOpen = false;
                win.controlRecover();
                win.winOpenTimer = new Date().getTime();
                this.$windowContaion.removeChild(win);
                if(CWindow.WINDOW_TYPE_GARBAGE == win.winValue)//如果是立即销毁界面
                 Core.inst.wndFactory.destroyWindow(win.windID);
             }
            win = null;
        }
        winDic = null;
        return true;
    }
    /**
     * 打开弹窗界面
     */
    public openDialogWindow(id:any,data:any,location:Laya.Point=null):boolean
    {
       let dialogDic:Laya.Dictionary = this.$LayaDic.get(CLayerMananger.LayaerType_Dialog);
       if(null == dialogDic.get(id))
       dialogDic.set(id,Core.inst.dialogFactory.getDialogByID(id));
       let dialog:CDialog = dialogDic.get(id);
       dialog.data = data;
       this.$dialogContaion.addChild(dialog);
       if(null != location)
       {
        dialog.x = location.x ;
        dialog.y = location.y ;
       }
       else
       {
        dialog.x = (GameConfig.STAGE_WIDTH>>1)-(dialog.width>>1);
        dialog.y = (GameConfig.STAGE_HEIGHT>>1)-(dialog.height>>1)
       }
       dialogDic = null;
       dialog = null;
       return true;
    }
    /**
     * 关闭弹窗界面
     */
    public closeDialogWindow(id:any):boolean
    {
       let dialogDic:Laya.Dictionary = this.$LayaDic.get(CLayerMananger.LayaerType_Dialog);
       if(null == dialogDic.get(id))
       return false;
       let dialog:CDialog = dialogDic.get(id);
       dialog.data =null;
       if(this.$dialogContaion.contains(dialog))
       this.$dialogContaion.removeChild(dialog);
       dialog = null;
       dialogDic = null;
       return true;
    }
   /**
    * 關閉所有彈窗
    */
    public closeAllDialog():boolean
    {
        for(;this.$dialogContaion.numChildren>0;)
        this.$dialogContaion.removeChildAt(0);
        return true;
    }
    /**
     * 打开特效(全局特效)
     */
    public openEffect(url:string):any
    {

    }
   /**
    * 资源释放回调
    */
    private resourceReleaseFun(type:any,winid:any):void 
    {   
        let typeDic:Laya.Dictionary= this.$LayaDic.get(type)
         switch(type)
         {
             case CLayerMananger.LayaerType_Window:
             typeDic.remove(winid);
             break;
         }
    }

}