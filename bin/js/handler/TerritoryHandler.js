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
* tang 领地通信;
*/
var TerritoryHandler = /** @class */ (function (_super) {
    __extends(TerritoryHandler, _super);
    function TerritoryHandler() {
        var _this = _super.call(this) || this;
        CHandler.msgHandler.set(NetCode.WSM_S_TERRITORY_INFO, _this.recevei_10291.bind(_this));
        return _this;
    }
    /**
     * 接收领地数据
     */
    TerritoryHandler.prototype.recevei_10291 = function (msg) {
    };
    return TerritoryHandler;
}(CHandler));
//# sourceMappingURL=TerritoryHandler.js.map