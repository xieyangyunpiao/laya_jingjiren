/*
* tang 主界面;
*/
class MainWindow extends CWindow{
    constructor()
    {
      super();
    }
    protected instanceinit():void 
    { 
        this.$ui = new ui.main.MainWindowUI();
        this.addChild(this.$ui);
    }
    public controlRecover():void
    {
        super.controlRecover();
        this.graphics.clear();//清空背景的绘制
    }
}