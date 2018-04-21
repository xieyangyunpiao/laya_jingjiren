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
* name;
*/
var LoginWindow = /** @class */ (function (_super) {
    __extends(LoginWindow, _super);
    function LoginWindow() {
        return _super.call(this, [{ type: 0, url: "res/atlas/loginview.atlas" }]) || this;
    }
    LoginWindow.prototype.instanceinit = function () {
        this.$ui = new ui.login.LoginWindowUI();
        this.$winValue = CWindow.WINDOW_TYPE_GARBAGE;
        ; //界面类型为关闭立即销毁界面
        this.addChild(this.$ui);
        this.$ui.startGameBtn.clickFun = this.clickStartGameCall;
        this.startPreLoader();
        Core.inst.handler.LoginHandler.send_10001;
    };
    LoginWindow.prototype.clickStartGameCall = function () {
        Core.inst.layer.closeWindowByID(CWindowID.LOGIN_WINDOW);
    };
    /**
     * 开始预加载
     */
    LoginWindow.prototype.startPreLoader = function () {
        var preloaderMap = [];
        var loaderArr = [];
        preloaderMap.push("table/language.json:1");
        // preloaderMap.push("ani/role/60/skeleton.sk:7")
        for (var i = 0; i < preloaderMap.length; i++) {
            var configMap = String(preloaderMap[i]).split(":");
            var type = configMap[1];
            var loaderData = new LoaderData();
            loaderData.LoaderType = type - 0;
            loaderData.LoaderUrl = configMap[0];
            loaderArr.push(loaderData);
        }
        CUtil.Log("开始加載:" + new Date());
        Core.inst.load.setPreLoaderRes(loaderArr);
        loaderArr = null;
    };
    LoginWindow.prototype.controlRecover = function () {
        _super.prototype.controlRecover.call(this);
        this.graphics.clear(); //清空背景的绘制
    };
    return LoginWindow;
}(CWindow));
//# sourceMappingURL=LoginWindow.js.map