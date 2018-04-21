/*
* 服务器选择界面;
*/
class LoginServerListWindow extends CWindow
{

    private $serverList:Laya.List;
    private $serverAddrMap:Array<any>;
    constructor()
    {
      super([{type:0,url:"res/atlas/loginview.atlas"},{type:1,url:"table/gameconfig.json"}]);
    }

    protected instanceinit():void 
    { 
        this.$ui = new ui.login.LoginServerListUI();
        this.$serverAddrMap = Core.inst.resource.getTableResource("table/gameconfig.json")["values"][0];
        this.addChild(this.$ui);
        this.$serverList = new Laya.List();
        this.$serverList.renderHandler=Laya.Handler.create(this,this.renderServerList,null,false);
        this.$serverList.mouseHandler= Laya.Handler.create(this, this.selectSeverList,null,false);
        this.$serverList.itemRender = ServerListItem;
        this.addChild(this.$serverList);
        this.$serverList.dataSource = this.$serverAddrMap;
        this.$serverList.x =198;
        this.$serverList.y =458;
        this.$serverList.repeatX = 2;
        this.$serverList.repeatY = Math.ceil(this.$serverAddrMap.length /2);
        this.$serverList.spaceX = 150;
        this.$serverList.spaceY = 50;
        this.$winValue = CWindow.WINDOW_TYPE_GARBAGE;//界面类型为关闭立即销毁界面
    }
    private selectSeverList(event:Event,index:any)
    {
       
        if(event.type == Laya.Event.CLICK)
        {
        let  serverInfo:any = this.$serverList.getItem(index);
        Core.inst.layer.openWindowByID(CWindowID.LOGIN_WINDOW,serverInfo)
        }
    }

    private renderServerList(cell:ServerListItem)
    {
         cell.data  = cell.dataSource;
    }

    public controlRecover():void
    {
        super.controlRecover();
        this.$serverList.dataSource = null;
        this.$serverList.renderHandler= null;
        this.$serverList.mouseHandler = null;
        this.$serverList.destroy(true);
        this.$serverList = null;
        this.$serverAddrMap.length = 0;
        this.$serverAddrMap = null;
    }
}