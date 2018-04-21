/*
* tang 導航工廠;
*/
var CNagivatorFactory = /** @class */ (function () {
    function CNagivatorFactory() {
        if (false == CNagivatorFactory.$open) {
            Error("錯誤實例化CNagivatorFactory,請通過CNagivatorFactory.inst實例化");
        }
        this.$nagivatorDic = new Laya.Dictionary();
        CNagivatorFactory.$inst = this;
    }
    Object.defineProperty(CNagivatorFactory, "inst", {
        get: function () {
            null == CNagivatorFactory.$inst && false == CNagivatorFactory.$open ? (CNagivatorFactory.$open = true) && new CNagivatorFactory() : 0;
            return CNagivatorFactory.$inst;
        },
        enumerable: true,
        configurable: true
    });
    CNagivatorFactory.prototype.getNagivator = function (id) {
        if (null == this.$nagivatorDic.get(id))
            this.$nagivatorDic.set(id, new window[id]());
        return this.$nagivatorDic.get(id);
    };
    CNagivatorFactory.$inst = null;
    CNagivatorFactory.$open = false;
    return CNagivatorFactory;
}());
//# sourceMappingURL=CNagivatorFactory.js.map