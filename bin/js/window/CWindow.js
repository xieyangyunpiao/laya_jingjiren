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
* name;
*/
var CWindow = /** @class */ (function (_super) {
    __extends(CWindow, _super);
    function CWindow(resurl) {
        if (resurl === void 0) { resurl = null; }
        var _this = _super.call(this) || this;
        _this.$windDefaultSkin = ""; //界面默認皮膚
        _this.$windOpen = false; //窗口是否打开
        _this.$isWinClose = true; //是否支持统一关闭操作
        _this.$winPreOpenTimer = null; //界面上次打开时间(用于资源释放的依据)
        _this.$winOpenNum = 0; //界面打开次数(用于资源释放的依据)
        _this.$winValue = 2; //界面权重 1:核心界面 2:普通界面,3:立即销货界面 (用于资源释放的依据)
        _this.$eventMap = []; //注册事件映射表[{target:..,caller:....,type:...,fun:...}]
        _this.$winResUrl = resurl;
        _this.$cloneWinResUrl = [];
        if (null != _this.$winResUrl)
            _this.$cloneWinResUrl = _this.$cloneWinResUrl.concat(_this.$winResUrl);
        _this.viewport = new Laya.Rectangle(0, 0, GameConfig.STAGE_WIDTH, GameConfig.STAGE_HEIGHT);
        _this.width = GameConfig.STAGE_WIDTH;
        _this.height = GameConfig.STAGE_HEIGHT;
        //===================窗口资源的加载======================
        if (null != _this.$winResUrl && 0 != _this.$winResUrl.length) {
            for (var i = 0; i < _this.$winResUrl.length; i++) {
                if (false == Core.inst.resource.hasResourceByUrl(_this.$winResUrl[i].type, _this.$winResUrl[i].url)) {
                    switch (_this.$winResUrl[i].type) {
                        case CLoaderManager.LoaderType_ALTAS:
                            Core.inst.resource.getAltasResource(_this.$winResUrl[i].url, _this.loadWinResCom.bind(_this), _this.loadWinResProgress, _this.loadWinResError);
                            break;
                        case CLoaderManager.LoaderType_TABLE:
                            Core.inst.resource.getTableResource(_this.$winResUrl[i].url, _this.loadWinResCom.bind(_this), _this.loadWinResProgress, _this.loadWinResError);
                            break;
                        case CLoaderManager.LoaderType_SPINE:
                            Core.inst.resource.getSpineResource(_this.$winResUrl[i].url, _this.loadWinResCom.bind(_this), _this.loadWinResProgress, _this.loadWinResError);
                            break;
                        case CLoaderManager.LoaderType_SOUND:
                            Core.inst.resource.getSoundResource(_this.$winResUrl[i].url, _this.loadWinResCom.bind(_this), _this.loadWinResProgress, _this.loadWinResError);
                            break;
                        case CLoaderManager.LoaderType_IMAGE:
                            Core.inst.resource.getImageResource(_this.$winResUrl[i].url, _this.loadWinResCom.bind(_this), _this.loadWinResProgress, _this.loadWinResError);
                            break;
                    }
                }
                else {
                    _this.$winResUrl.splice(i, 1);
                }
            }
            CWindow.$winResLoadBool = true;
            resurl = null;
        }
        else {
            _this.globalInit();
        }
        //=======默认皮肤的加载========
        if ("" != _this.$windDefaultSkin) {
            if (null == Core.inst.resource.hasResourceByUrl(CLoaderManager.LoaderType_IMAGE, _this.$windDefaultSkin))
                Core.inst.resource.getImageResource(_this.$windDefaultSkin, _this.loadDefaultSkinComFun.bind(_this));
            else
                _this.graphics.drawTexture(Core.inst.resource.getImageResource(_this.$windDefaultSkin));
        }
        _this.$eventMap = [];
        return _this;
    }
    /**
     * 默认皮肤加载完成
     */
    CWindow.prototype.loadDefaultSkinComFun = function (url) {
        var texture = new Laya.Texture();
        this.graphics.drawTexture(texture);
        this.width = texture.width;
        this.height = texture.height;
        texture = null;
    };
    Object.defineProperty(CWindow.prototype, "windID", {
        get: function () { return this.$windID; },
        /**
         * 界面ID
         */
        set: function (value) { this.$windID = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CWindow.prototype, "winResUrl", {
        /**
         * 返回界面资源路径
         */
        get: function () { return this.$cloneWinResUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CWindow.prototype, "winOpenNum", {
        get: function () { return this.$winOpenNum; },
        /**
         * 界面打开次数
         */
        set: function (value) { this.$winOpenNum = value; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(CWindow.prototype, "winOpenTimer", {
        get: function () { return this.$winPreOpenTimer; },
        /**
         * 界面上次打开时间
         */
        set: function (value) { this.$winPreOpenTimer = value; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    /**
     * 加载界面资源完毕
     */
    CWindow.prototype.loadWinResCom = function (url) {
        for (var i = 0; i < this.$winResUrl.length; i++) {
            if (this.$winResUrl[i].url == url)
                this.$winResUrl.splice(i, 1);
        }
        if (0 == this.$winResUrl.length) {
            CWindow.$winResLoadBool = false;
            this.globalInit();
        }
        url = "";
    };
    /**
     * 全局的初始化
     */
    CWindow.prototype.globalInit = function () {
        this.instanceinit();
        this.eventInit();
    };
    /**
     * 实例的初始化
     */
    CWindow.prototype.instanceinit = function () {
    };
    /**
     * 事件的初始化
     */
    CWindow.prototype.eventInit = function () {
        for (var i = 0; i < this.$eventMap.length; i++)
            CEventManager.inst.registerEvent(this.$eventMap[i].target, this.$eventMap[i].caller, this.$eventMap[i].type, this.$eventMap[i].fun);
    };
    /**
    * 加载界面资源过程
    */
    CWindow.prototype.loadWinResProgress = function () {
        console.log("窗口资源加载中");
    };
    /**
     * 加载界面资源错误
     */
    CWindow.prototype.loadWinResError = function () {
        CWindow.$winResLoadBool = false;
    };
    Object.defineProperty(CWindow.prototype, "winValue", {
        /**
         * 返回界面权重
         */
        get: function () { return this.$winValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CWindow.prototype, "windOpen", {
        /**
         * 返回当前界面的打开状态
         */
        get: function () { return this.$windOpen; },
        /**
         * 设置当前界面的打开状态
         */
        set: function (value) { this.$windOpen = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CWindow.prototype, "isWinClose", {
        /**
         * 返回是否支持统一关闭操作
         */
        get: function () { return this.$isWinClose; },
        enumerable: true,
        configurable: true
    });
    /**
     * 控件的回收
     */
    CWindow.prototype.controlRecover = function () {
        for (var i = 0; i < this.$eventMap.length; i++)
            CEventManager.inst.removeEven(this.$eventMap[i].target, this.$eventMap[i].caller, this.$eventMap[i].type, this.$eventMap[i].fun);
        null != this.$ui && this.$ui.destroy(true);
        this.removeChild(this.$ui);
    };
    Object.defineProperty(CWindow.prototype, "data", {
        /**
          * 设置数据
        */
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    CWindow.WINODW_TYPE_INPORTANT = 1; //核心界面
    CWindow.WINODW_TYPE_NORMALL = 2; //普通界面;
    CWindow.WINDOW_TYPE_GARBAGE = 3; //立即销毁界面
    CWindow.$winResLoadBool = false; //窗口资源是否正在进行加载
    return CWindow;
}(Laya.Sprite));
//# sourceMappingURL=CWindow.js.map