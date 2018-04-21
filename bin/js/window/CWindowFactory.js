/*
* tang 界面管理;
*/
var CWindowFactory = /** @class */ (function () {
    function CWindowFactory() {
        this.$resTimer = 180000; //界面资源释放时间（目前3分钟检查一次）
        if (false == CWindowFactory.$open) {
            throw Error("错误实例化CWindowFactory,请通过CWindowFactory.inst实例化");
        }
        this.$winDic = new Laya.Dictionary();
        Laya.timer.loop(this.$resTimer, this, this.windResRelease);
        CWindowFactory.$inst = this;
    }
    Object.defineProperty(CWindowFactory, "inst", {
        get: function () {
            null == CWindowFactory.$inst && false == CWindowFactory.$open ? (CWindowFactory.$open = true) && new CWindowFactory() : 0;
            return CWindowFactory.$inst;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 通过界面ID返回对应界面
     * @param winID 界面ID
     */
    CWindowFactory.prototype.getWindowByID = function (winID) {
        if (null == this.$winDic.get(winID))
            this.$winDic.set(winID, new window[winID]());
        return this.$winDic.get(winID);
    };
    /**
     * 根据时间进行窗口资源的释放
     */
    CWindowFactory.prototype.windResRelease = function () {
        var aveOpenNum = 0; //平均打开次数
        for (var i = 0; i < this.$winDic.keys.length; i++) {
            var win = this.$winDic.get(this.$winDic.keys[i]);
            aveOpenNum += win.winOpenNum;
        }
        aveOpenNum = Math.floor(aveOpenNum / this.$winDic.keys.length);
        for (var j = 0; j < this.$winDic.keys.length; j++) {
            var win = this.$winDic.get(this.$winDic.keys[j]);
            //=======界面资源释放:界面没有打开，打开次数小于所有界面的平均值，权重值为普通界面，距离上次打开超过1分钟========
            if (false == win.windOpen && win.winOpenNum < aveOpenNum && 1 != win.winValue && new Date().getTime() - win.winOpenTimer >= 60000) {
                CEventManager.inst.dispatchEvent(Core.inst.layer, WindowEvent.WINDOW_RESOURCE_RELEASE, [CLayerMananger.LayaerType_Window, win.windID]);
                Core.inst.resource.JsonResRelase(win.winResUrl);
                this.$winDic.remove(this.$winDic.keys[j]);
                CUtil.Log("释放窗口:" + win.windID);
                win.destroy(true);
                win = null;
            }
        }
    };
    /**
     * 更具权重主动释放资源
     */
    CWindowFactory.prototype.destroyWindow = function (windID) {
        var win = this.$winDic.get(windID);
        CEventManager.inst.dispatchEvent(Core.inst.layer, WindowEvent.WINDOW_RESOURCE_RELEASE, [CLayerMananger.LayaerType_Window, win.windID]);
        Core.inst.resource.JsonResRelase(win.winResUrl);
        this.$winDic.remove(windID);
        CUtil.Log("释放窗口:" + windID);
        win.destroy(true);
        win = null;
    };
    /**
     * 通过窗口ID判断某个窗口是否打开
     */
    CWindowFactory.prototype.isOpenWindowByID = function (id) {
        var isopen = false;
        var wind = null;
        wind = this.$winDic.get(id);
        wind && (true == wind.windOpen) && (isopen = true);
        return false;
    };
    CWindowFactory.$inst = null;
    CWindowFactory.$open = false;
    return CWindowFactory;
}());
//# sourceMappingURL=CWindowFactory.js.map