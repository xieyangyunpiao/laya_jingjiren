/*
* tang 计时器管理;
*/
var CTimerManager = /** @class */ (function () {
    function CTimerManager() {
        if (false == CTimerManager.$open) {
            console.log("错误实例化CTimerManager,请通过CTimerMannager.inst实例化");
        }
        CTimerManager.$inst = this;
        Laya.timer.loop(1000, this, this.timerFunCall);
        this.$timerFunDic = new Laya.Dictionary();
    }
    Object.defineProperty(CTimerManager, "inst", {
        get: function () {
            false == CTimerManager.$open && null == CTimerManager.$open ? (CTimerManager.$open = true) && new CTimerManager() : 0;
            return CTimerManager.$inst;
        },
        enumerable: true,
        configurable: true
    });
    CTimerManager.prototype.timerFunCall = function () {
        for (var i = 0; i < this.$timerFunDic.keys.length; i++) {
            var timerInfo = this.$timerFunDic.get(this.$timerFunDic.keys[i]);
            var curTimer = new Date().getTime();
            if (curTimer - timerInfo.$curTimer >= timerInfo.$delay) {
                if (-1 == timerInfo.$allcount) {
                    var fun = timerInfo.$fun;
                    timerInfo.$curCount += 1;
                    timerInfo.$curTimer = curTimer;
                    fun();
                }
                else {
                    if (timerInfo.$curCount < timerInfo.$allcount) {
                        var fun = timerInfo.$fun;
                        timerInfo.$curCount += 1;
                        timerInfo.$curTimer = curTimer;
                        fun();
                    }
                    else {
                        this.$timerFunDic.remove(timerInfo.$timerName);
                    }
                }
                timerInfo = null;
            }
        }
    };
    /**
     * 添加延时回调
     * @param timerName 计时器名称
     * @param delay 延迟时间
     * @param fun 回调函数
     * @param count 回调次数 -1无限回调
     */
    CTimerManager.prototype.addTimerCall = function (timerName, delay, fun, count) {
        if (count === void 0) { count = -1; }
        var timerInfo = { $timerName: timerName, $delay: delay, $fun: fun, $allcount: count, $curCount: 0, $curTimer: new Date().getTime() };
        this.$timerFunDic.set(timerName, timerInfo);
        fun = null;
    };
    /**
     * 移除延时
     * @param timerName 延时名称
     * @param fun 回调函数
     */
    CTimerManager.prototype.removeTimerCall = function (timerName, fun) {
        if (null == this.$timerFunDic.get(timerName))
            return;
        this.$timerFunDic.remove(timerName);
    };
    /**
     * 是否具有某个延时器
     * @param timerName 延时名称
     * @param fun 回调函数
     */
    CTimerManager.prototype.hasTimerCall = function (timerName, fun) {
        if (this.$timerFunDic.get(timerName))
            return true;
        return false;
    };
    CTimerManager.$inst = null;
    CTimerManager.$open = false;
    return CTimerManager;
}());
//# sourceMappingURL=CTimerManager.js.map