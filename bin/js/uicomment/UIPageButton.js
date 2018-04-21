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
* tang頁面標簽;
*/
var UIPageButton = /** @class */ (function (_super) {
    __extends(UIPageButton, _super);
    function UIPageButton(titlemap, item, clickFun) {
        if (item === void 0) { item = UIPageItem; }
        if (clickFun === void 0) { clickFun = null; }
        var _this = _super.call(this) || this;
        _this.$titleMap = titlemap;
        _this.$clickFun = clickFun;
        _this.$tabList.itemRender = item;
        _this.$tabList.repeatX = titlemap.length;
        _this.$tabList.repeatY = 1;
        _this.$tabList.dataSource = titlemap;
        _this.$tabList.mouseHandler = Laya.Handler.create(_this, _this.clickPageCallFun, null, false);
        titlemap = null;
        item = null;
        clickFun = null;
        return _this;
    }
    Object.defineProperty(UIPageButton.prototype, "clickFun", {
        set: function (value) { this.$clickFun = value && (value = null); },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * 單機頁簽回調
     */
    UIPageButton.prototype.clickPageCallFun = function (value) {
        this.$curSelectIndex = value;
        null != this.$clickFun && this.$clickFun();
        this.resetRender();
        value = null;
    };
    Object.defineProperty(UIPageButton.prototype, "curCurSelectIndex", {
        set: function (value) {
            this.$curSelectIndex = value;
            null != this.$clickFun && this.$clickFun(this.$curSelectIndex);
            this.resetRender();
            value = null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 重新進行渲染
     */
    UIPageButton.prototype.resetRender = function () {
    };
    return UIPageButton;
}(UIElement));
//# sourceMappingURL=UIPageButton.js.map