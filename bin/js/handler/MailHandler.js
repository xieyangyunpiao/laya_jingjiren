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
* tang 邮件通信;
*/
var MailHandler = /** @class */ (function (_super) {
    __extends(MailHandler, _super);
    function MailHandler() {
        var _this = _super.call(this) || this;
        CHandler.msgHandler.set(NetCode.WSM_S_GET_EMAIL_INFO, _this.recevei_10152.bind(_this));
        return _this;
    }
    /**
     * 获取邮件信息
     */
    MailHandler.prototype.recevei_10152 = function () {
    };
    return MailHandler;
}(CHandler));
//# sourceMappingURL=MailHandler.js.map