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
* tang 主界面;
*/
var MainWindow = /** @class */ (function (_super) {
    __extends(MainWindow, _super);
    function MainWindow() {
        return _super.call(this) || this;
    }
    MainWindow.prototype.instanceinit = function () {
        this.$ui = new ui.main.MainWindowUI();
        this.addChild(this.$ui);
    };
    MainWindow.prototype.controlRecover = function () {
        _super.prototype.controlRecover.call(this);
        this.graphics.clear(); //清空背景的绘制
    };
    return MainWindow;
}(CWindow));
//# sourceMappingURL=MainWindow.js.map