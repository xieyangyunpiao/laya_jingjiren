/*
* tang;
*/
var CHandlerFactory = /** @class */ (function () {
    function CHandlerFactory() {
        if (false == CHandlerFactory.$open) {
            throw Error("错误实例化CHandlerFactroy,请通过CHandlerFactory.inst实例化");
        }
        this.initHandler();
        CHandlerFactory.$inst = this;
    }
    CHandlerFactory.prototype.initHandler = function () {
        if (null == this.$loginHandelr)
            this.$loginHandelr = new LoginHandler();
        if (null == this.$battleHandler)
            this.$battleHandler = new BattleHandler();
    };
    Object.defineProperty(CHandlerFactory.prototype, "LoginHandler", {
        get: function () {
            return this.$loginHandelr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CHandlerFactory.prototype, "battleHandler", {
        get: function () {
            return this.$battleHandler;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CHandlerFactory, "inst", {
        get: function () {
            null == CHandlerFactory.$inst && false == CHandlerFactory.$open ? (CHandlerFactory.$open = true) && new CHandlerFactory() : 0;
            return CHandlerFactory.$inst;
        },
        enumerable: true,
        configurable: true
    });
    CHandlerFactory.$inst = null;
    CHandlerFactory.$open = false;
    return CHandlerFactory;
}());
//# sourceMappingURL=CHandlerFactory.js.map