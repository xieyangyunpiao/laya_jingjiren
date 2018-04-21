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
* tang 導航父類;
*/
var CNagivator = /** @class */ (function (_super) {
    __extends(CNagivator, _super);
    function CNagivator(resurl) {
        if (resurl === void 0) { resurl = null; }
        return _super.call(this, resurl) || this;
    }
    return CNagivator;
}(CWindow));
//# sourceMappingURL=CNagivator.js.map