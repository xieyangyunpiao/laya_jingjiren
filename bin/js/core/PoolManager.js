/*
* tang 對象池的封裝;
*/
var PoolManager = /** @class */ (function () {
    function PoolManager() {
        if (false == PoolManager.$open) {
            throw Error("\n调用PoolManager方式异常,请通过PoolManager.inst方式调用");
        }
        this.$poolDic = new Laya.Dictionary();
        PoolManager.$inst = this;
    }
    Object.defineProperty(PoolManager, "inst", {
        get: function () {
            null == PoolManager.$inst && false == PoolManager.$open ? (PoolManager.$open = true) && new PoolManager() : 0;
            return PoolManager.$inst;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 通过类名获得对象
     */
    PoolManager.prototype.getObjectByClassName = function (name) {
        if (false == this.hasObjectByCalssName(name))
            this.createObject(name);
        var poolMap = this.$poolDic.get(name);
        return poolMap.shift();
    };
    PoolManager.prototype.createObject = function (name) {
        if (false == this.hasObjectByCalssName(name))
            this.$poolDic.set(name, []);
        var objectMap = this.$poolDic.get(name);
        objectMap.push(new window[name]);
    };
    /**
     * 通过类名判断是否具有某个对象的池
     */
    PoolManager.prototype.hasObjectByCalssName = function (name) {
        if (null == this.$poolDic.get(name))
            return false;
        var poolMap = this.$poolDic.get(name);
        if (0 == poolMap.length)
            return false;
        return true;
    };
    /**
     * 添加对象到对象池中
     */
    PoolManager.prototype.addObjectToPool = function (name, target) {
        if (false == this.hasObjectByCalssName(name))
            this.$poolDic.set(name, []);
        var objectMap = this.$poolDic.get(name);
        objectMap.push(target);
    };
    PoolManager.$inst = null; //對该实例的唯一引用
    PoolManager.$open = false; //控制该类的对外开放
    return PoolManager;
}());
//# sourceMappingURL=PoolManager.js.map