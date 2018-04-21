/*
* tang 数据结构的克隆;
*/
var CTable = /** @class */ (function () {
    function CTable(target) {
        this.dataClone(this, target);
    }
    CTable.prototype.dataClone = function (source, target) {
        for (var i in target) {
            var value = target[i];
            if (typeof (value) == "string" || typeof (value) == "boolean" || typeof (value) == "number")
                this[i] = target[i];
            else
                this.dataClone(new Laya.Dictionary(), target[i]);
        }
        target = null;
        source = null;
    };
    return CTable;
}());
//# sourceMappingURL=CTable.js.map