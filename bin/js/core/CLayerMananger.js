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
* 层级管理;
*/
var CLayerMananger = /** @class */ (function (_super) {
    __extends(CLayerMananger, _super);
    function CLayerMananger() {
        var _this = _super.call(this) || this;
        _this.$topContaion = new Laya.Sprite(); //上层
        _this.$windowContaion = new Laya.Sprite(); //界面层;
        _this.$dialogContaion = new Laya.Sprite(); //弹窗层
        _this.$navigationContaion = new Laya.Sprite(); //導航層
        _this.$effectContaion = new Laya.Sprite(); //特效层
        _this.$midContaion = new Laya.Sprite(); //中层
        _this.$npcContaion = new Laya.Sprite(); //npc层
        _this.$roleContaion = new Laya.Sprite(); //角色层
        _this.$downContaion = new Laya.Sprite(); //下层
        _this.$mapContaion = new Laya.Sprite(); //地图层
        if (false == CLayerMananger.$open) {
            throw Error("错误实例化CLayerMananger,请通过CLayerMananger.inst实例化");
        }
        _this.$LayaDic = new Laya.Dictionary();
        _this.$LayaDic.set(CLayerMananger.LayaerType_Window, new Laya.Dictionary());
        _this.$LayaDic.set(CLayerMananger.LayaerType_Dialog, new Laya.Dictionary());
        _this.$LayaDic.set(CLayerMananger.LayaerType_Effect, new Laya.Dictionary());
        _this.$LayaDic.set(CLayerMananger.LayaerType_Role, new Laya.Dictionary());
        _this.$LayaDic.set(CLayerMananger.LayaerType_Npc, new Laya.Dictionary());
        _this.$LayaDic.set(CLayerMananger.LayaerType_Map, new Laya.Dictionary());
        _this.$LayaDic.set(CLayerMananger.LayaerType_Navigat, new Laya.Dictionary());
        _this.addChild(_this.$downContaion);
        _this.$downContaion.addChild(_this.$mapContaion);
        _this.addChild(_this.$midContaion);
        _this.$midContaion.addChild(_this.$npcContaion);
        _this.$midContaion.addChild(_this.$roleContaion);
        _this.addChild(_this.$topContaion);
        _this.$topContaion.addChild(_this.$windowContaion);
        _this.$topContaion.addChild(_this.$dialogContaion);
        _this.$topContaion.addChild(_this.$navigationContaion);
        _this.$topContaion.addChild(_this.$effectContaion);
        CEventManager.inst.registerEvent(_this, _this, WindowEvent.WINDOW_RESOURCE_RELEASE, _this.resourceReleaseFun);
        Laya.Stat.onclick = _this.clickStataCallFun.bind(_this);
        CLayerMananger.$inst = _this;
        return _this;
    }
    CLayerMananger.prototype.clickStataCallFun = function () {
        CUtil.Log("當前存在的頁面:");
        for (var i = 0; i < this.$windowContaion.numChildren; i++) {
            var wnd = this.$windowContaion.getChildAt(i);
            CUtil.Log(wnd.windID);
        }
    };
    /**
     * 打開導航
     */
    CLayerMananger.prototype.openNavigation = function (id, data, location) {
        if (data === void 0) { data = null; }
        if (location === void 0) { location = null; }
        var nagivaDic = this.$LayaDic.get(CLayerMananger.LayaerType_Navigat);
        var nagivatorWnd;
        if (null == nagivaDic.get(id)) {
            nagivaDic.set(id, Core.inst.nagivatoryFactory.getNagivator(id));
            nagivatorWnd = nagivaDic.get(id);
            nagivatorWnd.windID = id;
        }
        else {
            nagivatorWnd = nagivaDic.get(id);
            nagivatorWnd.globalInit();
        }
        nagivatorWnd.data = data;
        nagivatorWnd.windOpen = true;
        this.$navigationContaion.addChild(nagivatorWnd);
        if (null == location) {
            nagivatorWnd.x = (GameConfig.STAGE_WIDTH >> 1) - (nagivatorWnd.width >> 1);
            nagivatorWnd.y = (GameConfig.STAGE_HEIGHT >> 1) - (nagivatorWnd.height >> 1);
        }
        else {
            nagivatorWnd.x = location.x;
            nagivatorWnd.y = location.y;
        }
        nagivaDic = null;
        nagivatorWnd = null;
    };
    /**
     * 關閉導航
     */
    CLayerMananger.prototype.closeNavigation = function (id) {
        var nagivaDic = this.$LayaDic.get(CLayerMananger.LayaerType_Navigat);
        var nagivatorWnd = nagivaDic.get(id);
        if (nagivatorWnd == null || false == this.$navigationContaion.contains(nagivatorWnd))
            return;
        nagivatorWnd.windOpen = false;
        this.$navigationContaion.addChild(nagivatorWnd);
        nagivatorWnd = null;
        nagivaDic = null;
    };
    /**
     * 關閉所有導航
     */
    CLayerMananger.prototype.closeAllNavigation = function () {
        for (; this.$navigationContaion.numChildren > 0;) {
            var nagivatorWnd = this.$navigationContaion.getChildAt(0);
            nagivatorWnd.windOpen = false;
            this.$navigationContaion.removeChildAt(0);
            nagivatorWnd = null;
        }
    };
    /**
     * 替換導航
     */
    CLayerMananger.prototype.swapNavigation = function () {
    };
    Object.defineProperty(CLayerMananger, "inst", {
        get: function () {
            null == CLayerMananger.$inst && false == CLayerMananger.$open ? (CLayerMananger.$open = true) && new CLayerMananger() : 0;
            return CLayerMananger.$inst;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *通过界面ID得到相应的界面
     */
    CLayerMananger.prototype.openWindowByID = function (winid, data, closeotherWnd, location) {
        if (data === void 0) { data = null; }
        if (closeotherWnd === void 0) { closeotherWnd = true; }
        if (location === void 0) { location = null; }
        closeotherWnd && this.closeAllWindow();
        if (true == CWindow.$winResLoadBool) {
            CUtil.Log("正有页面资源正在加载，请稍后再试");
            return false;
        }
        var winDic = this.$LayaDic.get(CLayerMananger.LayaerType_Window);
        var win;
        if (null == winDic.get(winid)) {
            winDic.set(winid, Core.inst.wndFactory.getWindowByID(winid));
            win = winDic.get(winid);
            win.data = data;
            win.windID = winid;
        }
        else {
            win = winDic.get(winid);
            win.data = data;
            win.globalInit();
        }
        if (true == win.windOpen)
            return false;
        win.windOpen = true;
        win.winOpenNum = win.winOpenNum + 1;
        this.$windowContaion.addChild(win);
        if (null != location) {
            win.x = location.x;
            win.y = location.y;
        }
        else {
            win.x = (GameConfig.STAGE_WIDTH >> 1) - (win.width >> 1);
            win.y = (GameConfig.STAGE_HEIGHT >> 1) - (win.height >> 1);
        }
        winDic = null;
        win = null;
        return true;
    };
    /**
     * 打開地圖界面
     */
    CLayerMananger.prototype.openMapWindow = function () {
    };
    /**
     * 關閉地圖界面
     */
    CLayerMananger.prototype.closeMapWindow = function () {
    };
    /**
     * 根据界面ID关闭相应的界面
     * @param winid 界面ID
     */
    CLayerMananger.prototype.closeWindowByID = function (winid) {
        if (true == CWindow.$winResLoadBool) {
            CUtil.Log("正有页面资源正在加载，请稍后再试");
            return false;
        }
        var winDic = this.$LayaDic.get(CLayerMananger.LayaerType_Window);
        var win;
        if (null == winDic.get(winid)) {
            return false;
        }
        else {
            win = winDic.get(winid);
            if (false == win.windOpen)
                return false;
            win.winOpenTimer = new Date().getTime(); //重置窗口的打开时间
            this.$windowContaion.removeChild(win);
            win.controlRecover(); //窗口控件的回收
            win.windOpen = false; //打开状态设置为未打开
            if (CWindow.WINDOW_TYPE_GARBAGE == win.winValue)
                Core.inst.wndFactory.destroyWindow(win.windID);
        }
        winDic = null;
        win = null;
        return true;
    };
    /**
     * 关闭所有界面
     */
    CLayerMananger.prototype.closeAllWindow = function () {
        if (true == CWindow.$winResLoadBool) {
            CUtil.Log("正有页面资源正在加载，请稍后再试");
            return false;
        }
        var winDic = this.$LayaDic.get(CLayerMananger.LayaerType_Window);
        for (var i = 0; i < winDic.keys.length; i++) {
            var win = winDic.get(winDic.keys[i]);
            if (true == win.windOpen && true == win.isWinClose) {
                win.windOpen = false;
                win.controlRecover();
                win.winOpenTimer = new Date().getTime();
                this.$windowContaion.removeChild(win);
                if (CWindow.WINDOW_TYPE_GARBAGE == win.winValue)
                    Core.inst.wndFactory.destroyWindow(win.windID);
            }
            win = null;
        }
        winDic = null;
        return true;
    };
    /**
     * 打开弹窗界面
     */
    CLayerMananger.prototype.openDialogWindow = function (id, data, location) {
        if (location === void 0) { location = null; }
        var dialogDic = this.$LayaDic.get(CLayerMananger.LayaerType_Dialog);
        if (null == dialogDic.get(id))
            dialogDic.set(id, Core.inst.dialogFactory.getDialogByID(id));
        var dialog = dialogDic.get(id);
        dialog.data = data;
        this.$dialogContaion.addChild(dialog);
        if (null != location) {
            dialog.x = location.x;
            dialog.y = location.y;
        }
        else {
            dialog.x = (GameConfig.STAGE_WIDTH >> 1) - (dialog.width >> 1);
            dialog.y = (GameConfig.STAGE_HEIGHT >> 1) - (dialog.height >> 1);
        }
        dialogDic = null;
        dialog = null;
        return true;
    };
    /**
     * 关闭弹窗界面
     */
    CLayerMananger.prototype.closeDialogWindow = function (id) {
        var dialogDic = this.$LayaDic.get(CLayerMananger.LayaerType_Dialog);
        if (null == dialogDic.get(id))
            return false;
        var dialog = dialogDic.get(id);
        dialog.data = null;
        if (this.$dialogContaion.contains(dialog))
            this.$dialogContaion.removeChild(dialog);
        dialog = null;
        dialogDic = null;
        return true;
    };
    /**
     * 關閉所有彈窗
     */
    CLayerMananger.prototype.closeAllDialog = function () {
        for (; this.$dialogContaion.numChildren > 0;)
            this.$dialogContaion.removeChildAt(0);
        return true;
    };
    /**
     * 打开特效(全局特效)
     */
    CLayerMananger.prototype.openEffect = function (url) {
    };
    /**
     * 资源释放回调
     */
    CLayerMananger.prototype.resourceReleaseFun = function (type, winid) {
        var typeDic = this.$LayaDic.get(type);
        switch (type) {
            case CLayerMananger.LayaerType_Window:
                typeDic.remove(winid);
                break;
        }
    };
    CLayerMananger.LayaerType_Window = "window";
    CLayerMananger.LayaerType_Dialog = "Dialog";
    CLayerMananger.LayaerType_Effect = "effect";
    CLayerMananger.LayaerType_Role = "role";
    CLayerMananger.LayaerType_Npc = "npc";
    CLayerMananger.LayaerType_Map = "map";
    CLayerMananger.LayaerType_Navigat = "navigat";
    CLayerMananger.$inst = null;
    CLayerMananger.$open = false;
    return CLayerMananger;
}(Laya.Sprite));
//# sourceMappingURL=CLayerMananger.js.map