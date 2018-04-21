/*
* tang 游戏登陆界面;
*/
class LoginWindow extends CWindow
{

    constructor()
    {
      super([{type:0,url:"res/atlas/loginview.atlas"}]);
    }

    protected instanceinit():void 
    { 
        this.$ui = new ui.login.LoginWindowUI();
        this.addChild(this.$ui);
        this.$winValue = CWindow.WINDOW_TYPE_GARBAGE;;//界面类型为关闭立即销毁界面
        this.$ui.startGameBtn.clickFun = this.clickStartGameCall.bind(this);
        this.$eventMap.push({target:this.$ui.selectserver,caller:this,type:Laya.Event.CLICK,fun:this.clickServerList});
        this.$eventMap.push({target:this,caller:this,type:LoginEvent.ROLE_LOGIN_SUCC,fun:this.roleLoginServerSucc});
        if(null != this.$data)
        this.$ui.servername.text = this.$data.name
    }
  /**
   * 点击开始游戏
   */
    private clickStartGameCall():void 
    {
      if(null == this.$data)
      {
        Core.inst.layer.openWindowByID(CWindowID.LOGIN_SERVERLIST_WINDOW,null)
      }
      else
      {
        GameConfig.serverid = this.$data.id
        Core.inst.net.startConnect("ws://"+this.$data["addr"])
      }
    }
    /**
     * 点击选择服务器
     */
    private clickServerList():void 
    {
      Core.inst.layer.openWindowByID(CWindowID.LOGIN_SERVERLIST_WINDOW,null)
    }
   /**
    * 角色登陆服务器成功
    */
    private roleLoginServerSucc():void 
    {
        CUtil.Log("角色成功登陆服务器")
       Core.inst.layer.openWindowByID(CWindowID.MAIN_WINDOW,null)
    }
    
    public controlRecover():void
    {
        super.controlRecover();
        this.graphics.clear();//清空背景的绘制
    }
}