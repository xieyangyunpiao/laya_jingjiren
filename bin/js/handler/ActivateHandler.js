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
* tang 活动通信;
*/
var ActivateHandler = /** @class */ (function (_super) {
    __extends(ActivateHandler, _super);
    function ActivateHandler() {
        var _this = _super.call(this) || this;
        CHandler.msgHandler.set(NetCode.WSM_S_BUS_ACT_STATE, _this.recevei_11024.bind(_this));
        CHandler.msgHandler.set(NetCode.WSM_S_GIFT_LIMIT_NUM, _this.recevei_11208.bind(_this));
        CHandler.msgHandler.set(NetCode.WSM_S_DOUBLE_ACTIVE, _this.recevei_11340.bind(_this));
        return _this;
    }
    /**
     *  商业开服活动状态
     */
    ActivateHandler.prototype.recevei_11024 = function (msg) {
    };
    /**
     * 福利抢购 物品购买数量
     */
    ActivateHandler.prototype.recevei_11208 = function (msg) {
    };
    /**
     * 双倍活动
     */
    ActivateHandler.prototype.recevei_11340 = function (msg) {
    };
    return ActivateHandler;
}(CHandler));
//# sourceMappingURL=ActivateHandler.js.map