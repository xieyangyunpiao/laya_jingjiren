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
* 章节通信;
*/
var ChapterHandler = /** @class */ (function (_super) {
    __extends(ChapterHandler, _super);
    function ChapterHandler() {
        var _this = _super.call(this) || this;
        CHandler.msgHandler.set(NetCode.WSM_S_GET_STAGE_IONFO, _this.recevei_10175.bind(_this));
        return _this;
    }
    /**
     * 章节挑战相关信息
     */
    ChapterHandler.prototype.recevei_10175 = function (msg) {
    };
    return ChapterHandler;
}(CHandler));
//# sourceMappingURL=ChapterHandler.js.map