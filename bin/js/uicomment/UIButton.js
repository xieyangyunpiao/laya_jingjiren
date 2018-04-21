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
*
*/
var UIButton = /** @class */ (function (_super) {
    __extends(UIButton, _super);
    function UIButton(wnd) {
        var _this = _super.call(this) || this;
        _this.$locationInit = false;
        _this.$clickFun = null;
        _this.$clickRestTime = 500;
        _this.$clickCallBool = true; //是否响应单机事件
        _this.$initBool = false; //是否进行初始化
        _this.$wnd = wnd;
        wnd = null;
        _this.on(Laya.Event.ADDED, _this, _this.enterStageCall);
        return _this;
    }
    UIButton.prototype.enterStageCall = function () {
        this.on(Laya.Event.CLICK, this, this.clickButtonCall);
        if (true == this.$initBool)
            return;
        this.pivotX = (this.width >> 1);
        this.pivotY = (this.height >> 1);
        this.x = this.x + (this.width >> 1);
        this.y = this.y + (this.height >> 1);
        this.$initBool = true;
    };
    Object.defineProperty(UIButton.prototype, "clickFun", {
        set: function (fun) { this.$clickFun = fun; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIButton.prototype, "parentWnd", {
        /**
         * 設置父對象界面
         */
        set: function (wnd) { this.$wnd = wnd && (wnd = null); },
        enumerable: true,
        configurable: true
    });
    UIButton.prototype.clickButtonCall = function () {
        this.mouseEnabled = false;
        this.gray = true;
        null != this.$clickFun && this.$clickFun();
        Laya.timer.once(this.$clickRestTime, this, function () {
            this.mouseEnabled = true;
            this.gray = false;
        }, null, true);
    };
    Object.defineProperty(UIButton.prototype, "clickResTimer", {
        /**
         * 设置下次点击有效时间
         */
        set: function (value) { this.$clickRestTime = value; },
        enumerable: true,
        configurable: true
    });
    return UIButton;
}(Laya.Button));
//# sourceMappingURL=UIButton.js.map