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
* tang 游戏版权提示;
*/
var LoginGameCopyWindow = /** @class */ (function (_super) {
    __extends(LoginGameCopyWindow, _super);
    function LoginGameCopyWindow() {
        return _super.call(this) || this;
    }
    LoginGameCopyWindow.prototype.instanceinit = function () {
        this.$ui = new ui.login.LoginGameCopyrightUI();
        this.$winValue = CWindow.WINDOW_TYPE_GARBAGE;
        ; //界面类型为关闭立即销毁界面
        this.width = GameConfig.STAGE_WIDTH;
        this.height = GameConfig.STAGE_HEIGHT;
        this.addChild(this.$ui);
        Core.inst.time.addTimerCall("LoginGameCopyWindow", 2000, function () {
            Core.inst.layer.openWindowByID(CWindowID.LOGIN_WINDOW);
        }, 1);
    };
    LoginGameCopyWindow.prototype.controlRecover = function () {
        _super.prototype.controlRecover.call(this);
    };
    return LoginGameCopyWindow;
}(CWindow));
//# sourceMappingURL=LoginGameCopyWindow.js.map