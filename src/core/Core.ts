/*
* 核心模塊;
*/
class Core
{

    private $net:NetSocket;//網絡數據的傳輸與發送
    private $resource:CResourceManager;//資源管理器
    private $layer:CLayerMananger;//層級管理器
    private $handler:CHandlerFactory;//通信模塊
    private $msg:CMessageFactory;//消息模塊
    private $timer:CTimerManager;//延迟管理器
    private $wndFactory:CWindowFactory;//窗口管理器
    private $dialogFactory:CDialogFactory;//彈窗管理器
    private $nagivaFactory:CNagivatorFactory;//導航管理器
    private $load:CLoaderManager;//加載管理
    private $gMe:CCharacter;
    private static $inst:Core = null;
    private static $open:boolean = false;
    constructor()
    {
         if(false == Core.$open)
         Error("錯誤實例化Core,請通過Core.inst實例化")
         this.$net = NetSocket.inst;
         this.$handler = CHandlerFactory.inst;
         this.$msg = CMessageFactory.inst;
         this.$wndFactory = CWindowFactory.inst;
         this.$nagivaFactory = CNagivatorFactory.inst;
         this.$dialogFactory = CDialogFactory.inst;
         this.$load =CLoaderManager.inst;
         this.$resource = CResourceManager.inst;
         this.$layer = CLayerMananger.inst;
         this.$timer = CTimerManager.inst;
         this.$gMe = new CCharacter();
         Core.$inst = this;
         this.init();
    }

    private init()
    {
        Laya.stage.addChild(this.$layer)
    }
    

    public static get inst():Core
    {
       false == Core.$open && null == Core.$inst ? (Core.$open = true) && new Core():0
       return Core.$inst;
    }

    public get net():NetSocket{return this.$net};

    public get resource():CResourceManager{return this.$resource};

    public get layer():CLayerMananger{return this.$layer};

    public get handler():CHandlerFactory{return this.$handler};

    public get msg():CMessageFactory{return this.$msg};

    public get wndFactory():CWindowFactory{return this.$wndFactory};

    public get dialogFactory():CDialogFactory{return this.$dialogFactory};

    public get nagivatoryFactory():CNagivatorFactory{return this.$nagivaFactory};

    public get load():CLoaderManager{return this.$load}

    public get time():CTimerManager{return this.$timer}

    public get gMe():CCharacter{return this.$gMe}


}