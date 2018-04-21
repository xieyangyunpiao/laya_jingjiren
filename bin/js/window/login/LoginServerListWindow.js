var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* 服务器选择界面;
*/
var LoginServerListWindow = /** @class */ (function (_super) {
    __extends(LoginServerListWindow, _super);
    function LoginServerListWindow() {
        return _super.call(this, [{ type: 0, url: "res/atlas/loginview.atlas" }, { type: 1, url: "table/gameconfig.json" }]) || this;
    }
    LoginServerListWindow.prototype.instanceinit = function () {
        this.$ui = new ui.login.LoginServerListUI();
        this.$serverAddrMap = Core.inst.resource.getTableResource("table/gameconfig.json")["values"][0];
        this.addChild(this.$ui);
        this.$serverList = new Laya.List();
        this.$serverList.renderHandler = Laya.Handler.create(this, this.renderServerList, null, false);
        this.$serverList.mouseHandler = Laya.Handler.create(this, this.selectSeverList, null, false);
        this.$serverList.itemRender = ServerListItem;
        this.addChild(this.$serverList);
        this.$serverList.dataSource = this.$serverAddrMap;
        this.$serverList.x = 198;
        this.$serverList.y = 458;
        this.$serverList.repeatX = 2;
        this.$serverList.repeatY = Math.ceil(this.$serverAddrMap.length / 2);
        this.$serverList.spaceX = 150;
        this.$serverList.spaceY = 50;
        this.$winValue = CWindow.WINDOW_TYPE_GARBAGE; //界面类型为关闭立即销毁界面
    };
    LoginServerListWindow.prototype.selectSeverList = function (event, index) {
        if (event.type == Laya.Event.CLICK) {
            var serverInfo = this.$serverList.getItem(index);
            Core.inst.layer.openWindowByID(CWindowID.LOGIN_WINDOW, serverInfo);
        }
    };
    LoginServerListWindow.prototype.renderServerList = function (cell) {
        cell.data = cell.dataSource;
    };
    LoginServerListWindow.prototype.controlRecover = function () {
        _super.prototype.controlRecover.call(this);
        this.$serverList.dataSource = null;
        this.$serverList.renderHandler = null;
        this.$serverList.mouseHandler = null;
        this.$serverList.destroy(true);
        this.$serverList = null;
        this.$serverAddrMap.length = 0;
        this.$serverAddrMap = null;
    };
    return LoginServerListWindow;
}(CWindow));
//# sourceMappingURL=LoginServerListWindow.js.map