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
* tang 对象的克隆;
*/
var CObjctClone = /** @class */ (function (_super) {
    __extends(CObjctClone, _super);
    function CObjctClone(target) {
        var _this = _super.call(this) || this;
        _this.$target = target;
        target = null;
        _this.clone(_this, _this.$target);
        _this.$target = null;
        return _this;
    }
    CObjctClone.prototype.clone = function (source, target) {
        for (var keys in target) {
            if (typeof (target[keys]) == "number" || typeof (target[keys]) == "string" || typeof (target[keys])) {
                source.set(keys, target[keys]);
            }
            else {
                source.set(keys, new Laya.Dictionary());
                this.clone(source.get(keys), target[keys]);
            }
        }
        source = null;
        target = null;
    };
    return CObjctClone;
}(Laya.Dictionary));
//# sourceMappingURL=CObjctClone.js.map