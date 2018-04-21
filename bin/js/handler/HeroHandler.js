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
* tang 英雄通信;
*/
var HeroHandler = /** @class */ (function (_super) {
    __extends(HeroHandler, _super);
    function HeroHandler() {
        var _this = _super.call(this) || this;
        CHandler.msgHandler.set(NetCode.WSM_S_HERO_ALL_LIST, _this.recevei_11045.bind(_this));
        return _this;
    }
    /**
     *  英雄信息
     */
    HeroHandler.prototype.recevei_11045 = function (msg) {
    };
    return HeroHandler;
}(CHandler));
//# sourceMappingURL=HeroHandler.js.map