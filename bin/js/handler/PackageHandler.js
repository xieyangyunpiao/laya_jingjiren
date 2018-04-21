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
* tang 背包模塊;
*/
var PackageHandler = /** @class */ (function (_super) {
    __extends(PackageHandler, _super);
    function PackageHandler() {
        var _this = _super.call(this) || this;
        CHandler.msgHandler.set(NetCode.WSM_S_GET_BAG_INFO, _this.recevei_10021.bind(_this));
        CHandler.msgHandler.set(NetCode.WSM_S_GET_COUNTS_FRESH, _this.recevei_11033.bind(_this));
        CHandler.msgHandler.set(NetCode.WSM_S_GET_STATIC_FLAG, _this.recevei_10176.bind(_this));
        CHandler.msgHandler.set(NetCode.WSM_S_GET_MONTH_FLAG, _this.recevei_10178.bind(_this));
        CHandler.msgHandler.set(NetCode.WSM_S_GET_ARRAT_INFO, _this.recevei_10179.bind(_this));
        return _this;
    }
    /*
     背包信息
     */
    PackageHandler.prototype.recevei_10021 = function (msg) {
    };
    /**
     * 获取次数统计
     */
    PackageHandler.prototype.recevei_11033 = function (msg) {
    };
    /**
     *
     * 静态标记信息
     */
    PackageHandler.prototype.recevei_10176 = function (msg) {
    };
    /**
     * 每月重置信息
     */
    PackageHandler.prototype.recevei_10178 = function (msg) {
    };
    /**
     * 用数组标记的数据数据
     */
    PackageHandler.prototype.recevei_10179 = function (msg) {
    };
    return PackageHandler;
}(CHandler));
//# sourceMappingURL=PackageHandler.js.map