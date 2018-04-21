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
* tang 戰鬥位置;
*/
var BattleLocationItem = /** @class */ (function (_super) {
    __extends(BattleLocationItem, _super);
    function BattleLocationItem() {
        var _this = _super.call(this) || this;
        _this.graphics.drawRect(0, 0, 100, 100, '#FF0000');
        _this.width = 100;
        _this.height = 100;
        return _this;
    }
    return BattleLocationItem;
}(Laya.Box));
//# sourceMappingURL=BattleLocationItem.js.map