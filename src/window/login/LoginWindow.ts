/*
* name;
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
        this.$winValue = CWindow.WINDOW_TYPE_GARBAGE;;//界面类型为关闭立即销毁界面
        this.addChild(this.$ui);
        this.$ui.startGameBtn.clickFun = this.clickStartGameCall;
        this.startPreLoader();
        Core.inst.handler.LoginHandler.send_10001

    }

    private clickStartGameCall():void 
    {

      Core.inst.layer.closeWindowByID(CWindowID.LOGIN_WINDOW)
    }
    /**
     * 开始预加载
     */
    private startPreLoader():void 
    {
        let preloaderMap:Array<any> =[];
        let loaderArr:Array<any>=[];
        preloaderMap.push("table/language.json:1")
       // preloaderMap.push("ani/role/60/skeleton.sk:7")
        for(let i = 0;i < preloaderMap.length ;i++)
        {
          let configMap:Array<any>=String(preloaderMap[i]).split(":");
          let type:any = configMap[1];
          let loaderData:LoaderData = new LoaderData();
          loaderData.LoaderType = type-0;
          loaderData.LoaderUrl = configMap[0];
          loaderArr.push(loaderData);
        }
        CUtil.Log("开始加載:"+new Date())
        Core.inst.load.setPreLoaderRes(loaderArr);
        loaderArr = null;
    }

    public controlRecover():void
    {
        super.controlRecover();
        this.graphics.clear();//清空背景的绘制
    }
}