/*
* tang 事件管理;
*/
var CEventManager = /** @class */ (function () {
    function CEventManager() {
        if (false == CEventManager.$open) {
            console.log("错误实例化CEventMannager,请通过CEventManager.inst实例化");
            return;
        }
        CEventManager.$inst = this;
    }
    Object.defineProperty(CEventManager, "inst", {
        get: function () {
            false == CEventManager.$open && null == CEventManager.$inst ? (CEventManager.$open = true) && new CEventManager() : 0;
            return CEventManager.$inst;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 事件的注册
     */
    CEventManager.prototype.registerEvent = function (evt, caller, type, callFun) {
        evt.on(type, caller, callFun);
    };
    /**
     * 具有某个事件
     */
    CEventManager.prototype.hasEvent = function (evt, type) {
        return evt.hasListener(type);
    };
    /**
     * 事件的移除
     */
    CEventManager.prototype.removeEven = function (evt, caller, type, callFun) {
        evt.off(type, caller, callFun);
    };
    /**
     * 事件的派发
     */
    CEventManager.prototype.dispatchEvent = function (evt, type, data) {
        if (data === void 0) { data = null; }
        evt.event(type, data);
    };
    CEventManager.$inst = null;
    CEventManager.$open = false;
    return CEventManager;
}());
//# sourceMappingURL=CEventManager.js.map