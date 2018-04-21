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
        if (null == this.$bagHandler)
            this.$bagHandler = new PackageHandler();
        if (null == this.$heroHandler)
            this.$heroHandler = new HeroHandler();
        if (null == this.$mailHandler)
            this.$mailHandler = new MailHandler();
        if (null == this.$territoryHandler)
            this.$territoryHandler = new TerritoryHandler();
        if (null == this.$chapterHandler)
            this.$chapterHandler = new ChapterHandler();
        if (null == this.$activateHandler)
            this.$activateHandler = new ActivateHandler();
    };
    Object.defineProperty(CHandlerFactory.prototype, "chapterHandler", {
        get: function () {
            return this.$chapterHandler;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CHandlerFactory.prototype, "loginHandler", {
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
    Object.defineProperty(CHandlerFactory.prototype, "packageBag", {
        get: function () {
            return this.$bagHandler;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CHandlerFactory.prototype, "heroHandler", {
        get: function () {
            return this.$heroHandler;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CHandlerFactory.prototype, "mailHandler", {
        get: function () {
            return this.$mailHandler;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CHandlerFactory.prototype, "territoryHandler", {
        get: function () {
            return this.$territoryHandler;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CHandlerFactory.prototype, "activateHandler", {
        get: function () {
            return this.$activateHandler;
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