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
* tang;
*/
var ServerListItem = /** @class */ (function (_super) {
    __extends(ServerListItem, _super);
    function ServerListItem() {
        var _this = _super.call(this) || this;
        _this.$serverName = new Laya.Label();
        _this.$serverName.fontSize = 30;
        _this.addChild(_this.$serverName);
        _this.$serverName.text = " ";
        _this.width = 100;
        _this.height = 25;
        return _this;
    }
    Object.defineProperty(ServerListItem.prototype, "data", {
        set: function (value) {
            this.$serverName.changeText(value.name);
        },
        enumerable: true,
        configurable: true
    });
    return ServerListItem;
}(UIItem));
//# sourceMappingURL=ServerListItem.js.map