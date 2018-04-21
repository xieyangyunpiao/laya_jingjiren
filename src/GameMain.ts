// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(GameConfig.STAGE_WIDTH,GameConfig.STAGE_HEIGHT);
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE; //垂直居中对齐+
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER; //水平居中对齐
        Laya.stage.width = GameConfig.STAGE_WIDTH;
        Laya.stage.height =GameConfig.STAGE_HEIGHT;
        Laya.stage.scaleMode = "showall";//设置适配模式
        //自动竖屏，让游戏的水平方向始终与浏览器显示屏幕的最长边保持垂直。
        Laya.stage.screenMode = "none";
        Laya.stage.frameRate  = Laya.Stage.FRAME_FAST;
        Laya.stage.bgColor = "#e9e9e9";
        if(false == Laya.Render.isWebGL)
        Laya.Skeleton.useSimpleMeshInCanvas=true;
        Laya.DebugPanel.init();
        Laya.Stat.show(0,0)
        Laya.timer.once(500,this,this.initApp);
    }

    private initApp()
    {
        this.LoadParam();
        Core.inst.layer.openWindowByID(CWindowID.LOGIN_GAMECOPYRIGHT_WINDOW)
     // this.startPreLoader();

    }
    private LoadParam(): void 
    {
               Core.inst.gMe.mSessionid = Number(localStorage.getItem("sessionid"));
               Core.inst.gMe.mPtuid     = localStorage.getItem("ptuid");  // 注意:已加了渠道标志
               Core.inst.gMe.mToken     = localStorage.getItem("token");
               Core.inst.gMe.mIsActive  = Number(localStorage.getItem("isactive"));
               Core.inst.gMe.mDebug     = Number(localStorage.getItem("debug"));
               Core.inst.gMe.mPtExt     = localStorage.getItem("ptext"); 
    }
    private startPreLoader():void 
    {
        let preloaderMap:Array<any> =[];
        let loaderArr:Array<any>=[];
        preloaderMap.push("ani/role/1/1.sk:7")
        preloaderMap.push("ani/role/59/59.sk:7")
        preloaderMap.push("ani/role/59-1/59-1.sk:7")
        preloaderMap.push("ani/role/60/60.sk:7")
        preloaderMap.push("ani/role/60-1/60-1.sk:7")
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
}
new GameMain();