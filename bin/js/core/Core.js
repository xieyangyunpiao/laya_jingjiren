/*
* 核心模塊;
*/
var Core = /** @class */ (function () {
    function Core() {
        if (false == Core.$open)
            Error("錯誤實例化Core,請通過Core.inst實例化");
        this.$net = NetSocket.inst;
        this.$handler = CHandlerFactory.inst;
        this.$msg = CMessageFactory.inst;
        this.$wndFactory = CWindowFactory.inst;
        this.$nagivaFactory = CNagivatorFactory.inst;
        this.$dialogFactory = CDialogFactory.inst;
        this.$load = CLoaderManager.inst;
        this.$resource = CResourceManager.inst;
        this.$layer = CLayerMananger.inst;
        this.$timer = CTimerManager.inst;
        this.$gMe = new CCharacter();
        Core.$inst = this;
        this.init();
    }
    Core.prototype.init = function () {
        Laya.stage.addChild(this.$layer);
    };
    Object.defineProperty(Core, "inst", {
        get: function () {
            false == Core.$open && null == Core.$inst ? (Core.$open = true) && new Core() : 0;
            return Core.$inst;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Core.prototype, "net", {
        get: function () { return this.$net; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Core.prototype, "resource", {
        get: function () { return this.$resource; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Core.prototype, "layer", {
        get: function () { return this.$layer; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Core.prototype, "handler", {
        get: function () { return this.$handler; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Core.prototype, "msg", {
        get: function () { return this.$msg; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Core.prototype, "wndFactory", {
        get: function () { return this.$wndFactory; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Core.prototype, "dialogFactory", {
        get: function () { return this.$dialogFactory; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Core.prototype, "nagivatoryFactory", {
        get: function () { return this.$nagivaFactory; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Core.prototype, "load", {
        get: function () { return this.$load; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Core.prototype, "time", {
        get: function () { return this.$timer; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Core.prototype, "gMe", {
        get: function () { return this.$gMe; },
        enumerable: true,
        configurable: true
    });
    Core.$inst = null;
    Core.$open = false;
    return Core;
}());
//# sourceMappingURL=Core.js.map