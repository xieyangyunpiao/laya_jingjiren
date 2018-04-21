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
* tang 游戏登陆界面;
*/
var LoginWindow = /** @class */ (function (_super) {
    __extends(LoginWindow, _super);
    function LoginWindow() {
        return _super.call(this, [{ type: 0, url: "res/atlas/loginview.atlas" }]) || this;
    }
    LoginWindow.prototype.instanceinit = function () {
        this.$ui = new ui.login.LoginWindowUI();
        this.addChild(this.$ui);
        this.$winValue = CWindow.WINDOW_TYPE_GARBAGE;
        ; //界面类型为关闭立即销毁界面
        this.$ui.startGameBtn.clickFun = this.clickStartGameCall.bind(this);
        this.$eventMap.push({ target: this.$ui.selectserver, caller: this, type: Laya.Event.CLICK, fun: this.clickServerList });
        this.$eventMap.push({ target: this, caller: this, type: LoginEvent.ROLE_LOGIN_SUCC, fun: this.roleLoginServerSucc });
        if (null != this.$data)
            this.$ui.servername.text = this.$data.name;
    };
    /**
     * 点击开始游戏
     */
    LoginWindow.prototype.clickStartGameCall = function () {
        if (null == this.$data) {
            Core.inst.layer.openWindowByID(CWindowID.LOGIN_SERVERLIST_WINDOW, null);
        }
        else {
            GameConfig.serverid = this.$data.id;
            Core.inst.net.startConnect("ws://" + this.$data["addr"]);
        }
    };
    /**
     * 点击选择服务器
     */
    LoginWindow.prototype.clickServerList = function () {
        Core.inst.layer.openWindowByID(CWindowID.LOGIN_SERVERLIST_WINDOW, null);
    };
    /**
     * 角色登陆服务器成功
     */
    LoginWindow.prototype.roleLoginServerSucc = function () {
        CUtil.Log("角色成功登陆服务器");
        Core.inst.layer.openWindowByID(CWindowID.MAIN_WINDOW, null);
    };
    LoginWindow.prototype.controlRecover = function () {
        _super.prototype.controlRecover.call(this);
        this.graphics.clear(); //清空背景的绘制
    };
    return LoginWindow;
}(CWindow));
//# sourceMappingURL=LoginWindow.js.map