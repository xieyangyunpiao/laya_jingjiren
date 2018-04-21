/*
* tang 游戏版权提示;
*/
class LoginGameCopyWindow extends CWindow{
    constructor()
    {
        super();
    }
    protected instanceinit():void 
    { 
        this.$ui = new ui.login.LoginGameCopyrightUI();
        this.$winValue = CWindow.WINDOW_TYPE_GARBAGE;;//界面类型为关闭立即销毁界面
        this.width = GameConfig.STAGE_WIDTH;
        this.height =GameConfig.STAGE_HEIGHT;
        this.addChild(this.$ui);
        Core.inst.time.addTimerCall("LoginGameCopyWindow",2000,function()
        {
            Core.inst.layer.openWindowByID(CWindowID.LOGIN_WINDOW);
        },1)
        
    }
    public controlRecover():void
    {
        super.controlRecover();
    }
}