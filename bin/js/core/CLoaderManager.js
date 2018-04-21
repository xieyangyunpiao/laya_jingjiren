/*
* tang 加载管理器;
*/
var CLoaderManager = /** @class */ (function () {
    function CLoaderManager() {
        this.$loaderPriTeam = 2; //加载优先队列为2个等级 0为最高优先等级(一般用于预加载)
        this.$preLoaderMap = null; //预加载列表
        this.$maxLoadLine = 10; //最大加载队列
        if (false == CLoaderManager.$open) {
            throw Error("\n错误实例化CLoaderMannager,请通过CLoaderMannager.inst实例化");
        }
        Laya.loader.retryNum = 0;
        Laya.loader.maxLoader = this.$maxLoadLine;
        if (Laya.Render.isWebGL) {
            Laya.WorkerLoader.workerPath = "libs/worker.js";
            Laya.WorkerLoader.enable = true;
        }
        this.$loaderMap = [[], new Laya.Dictionary()];
        var loadDic = this.$loaderMap[1];
        for (var i = 0; i <= CLoaderManager.LoaderTypeNum; i++)
            loadDic.set(i, new Laya.Dictionary());
        this.$curLoadDic = new Laya.Dictionary();
        this.$loadFunDic = new Laya.Dictionary();
        Laya.timer.loop(100, this, this.startLoader);
        CLoaderManager.$inst = this;
        Laya.loader.on(Laya.Event.ERROR, this, this.loaderResourError);
    }
    Object.defineProperty(CLoaderManager, "inst", {
        get: function () {
            false == CLoaderManager.$open && null == CLoaderManager.$inst ? (CLoaderManager.$open = true) && new CLoaderManager() : 0;
            return CLoaderManager.$inst;
        },
        enumerable: true,
        configurable: true
    });
    //========开始加载=======
    CLoaderManager.prototype.startLoader = function () {
        if (this.$curLoadDic.keys.length <= this.$maxLoadLine) {
            var loaderDic = this.$loaderMap[1];
            for (var i = 0; i < loaderDic.keys.length; i++) {
                var typeDic = loaderDic.get(loaderDic.keys[i]);
                for (var j = 0; this.$curLoadDic.keys.length < this.$maxLoadLine && (this.$loaderMap[0].length > 0 || j < typeDic.keys.length); j++) {
                    var loaderData = void 0;
                    if (this.$loaderMap[0].length > 0) {
                        loaderData = this.$loaderMap[0].shift();
                        this.$curLoadDic.set(loaderData.LoaderUrl, loaderData);
                    }
                    else {
                        loaderData = typeDic.get(typeDic.keys[j]);
                        this.$curLoadDic.set(loaderData.LoaderUrl, loaderData);
                        typeDic.remove(loaderData.LoaderUrl);
                    }
                    this.begingLoader(loaderData);
                    loaderData = null;
                }
                typeDic = null;
            }
            loaderDic = null;
        }
    };
    CLoaderManager.prototype.begingLoader = function (loaderData) {
        switch (loaderData.LoaderType) {
            case CLoaderManager.LoaderType_TABLE:
                Laya.loader.load(loaderData.LoaderUrl, Laya.Handler.create(this, this.loaderResourCom, [loaderData, Laya.loader]), Laya.Handler.create(this, this.loaderResourPro, [loaderData, Laya.loader]), laya.net.Loader.JSON);
                break;
            case CLoaderManager.LoaderType_IMAGE:
                Laya.loader.load(loaderData.LoaderUrl, Laya.Handler.create(this, this.loaderResourCom, [loaderData, Laya.loader]), Laya.Handler.create(this, this.loaderResourPro, [loaderData, Laya.loader]), Laya.Loader.IMAGE);
                break;
            case CLoaderManager.LoaderType_ALTAS:
                Laya.loader.load(loaderData.LoaderUrl, Laya.Handler.create(this, this.loaderResourCom, [loaderData, Laya.loader]), Laya.Handler.create(this, this.loaderResourPro, [loaderData, Laya.loader]), laya.net.Loader.ATLAS);
                break;
            case CLoaderManager.LoaderType_SPINE:
                var templet = new Laya.Templet();
                templet.on(Laya.Event.COMPLETE, this, this.loaderResourCom, [loaderData, templet]);
                templet.loadAni(loaderData.LoaderUrl);
                templet = null;
                break;
        }
        loaderData = null;
    };
    /**
     *资源加载完成
     */
    CLoaderManager.prototype.loaderResourCom = function (loaderData, target) {
        CUtil.Log(loaderData.LoaderUrl + "加載完畢");
        this.$curLoadDic.remove(loaderData.LoaderUrl);
        switch (loaderData.LoaderType) {
            case CLoaderManager.LoaderType_TABLE:
            case CLoaderManager.LoaderType_IMAGE:
            case CLoaderManager.LoaderType_ALTAS:
                Core.inst.resource.addResource(loaderData.LoaderType, loaderData.LoaderUrl, target.getRes(loaderData.LoaderUrl));
                break;
            case CLoaderManager.LoaderType_SPINE:
                Core.inst.resource.addResource(loaderData.LoaderType, loaderData.LoaderUrl, target);
                break;
        }
        var funArr = this.$loadFunDic.get(loaderData.LoaderUrl);
        if (null != funArr) {
            for (var i = 0; i < funArr.length; i++) {
                var comFun = funArr[i].comFun;
                if (null != comFun) {
                    null != loaderData.ExtarData ? comFun(loaderData.LoaderUrl, loaderData.ExtarData) : comFun(loaderData.LoaderUrl);
                }
            }
            funArr.length = 0;
            this.$loadFunDic.remove(loaderData.LoaderUrl);
            funArr = null;
        }
        if (null != this.$preLoaderMap) {
            var index = this.$preLoaderMap.indexOf(loaderData);
            if (-1 != index) {
                //  let loadWin:LodingWindow = Core.inst.wndFactory.getWindowByID(CWindowID.LODING_WINDOW);
                //  loadWin.loaderPercent = (loaderData.ExtarData - this.$preLoaderMap.length)/loaderData.ExtarData  
                this.$preLoaderMap.splice(index, 1);
                //    CUtil.Log("预加载资源:"+loaderData.LoaderUrl+"加载完毕")
            }
            if (0 == this.$preLoaderMap.length) {
                this.$preLoaderMap = null;
                CUtil.Log("所有预加载资源加载完毕:" + new Date());
                Core.inst.layer.openWindowByID(CWindowID.BATTLE_WINDOW, null);
                //  Core.inst.layer.openWindowByID(CWindowID.BATTLE_WINDOW,null);
            }
        }
        loaderData = null;
        target = null;
    };
    /**
     * 加载过程回调
     */
    CLoaderManager.prototype.loaderResourPro = function (loaderData) {
        loaderData = null;
    };
    /**
     * 加载错误回调
     */
    CLoaderManager.prototype.loaderResourError = function (url) {
        CUtil.Log("加载资源:" + url + "错误");
        var loaderData = this.$curLoadDic.get(url);
        if (null != loaderData) {
            this.$curLoadDic.remove(loaderData.LoaderUrl);
            var funArr = this.$loadFunDic.get(url);
            if (null != funArr) {
                for (var i = 0; i < funArr.length; i++) {
                    var errorFun = funArr[i].erroFun;
                    if (null != errorFun)
                        errorFun();
                }
                funArr.length = 0;
                funArr = null;
                this.$loadFunDic.remove(url);
            }
        }
        loaderData = null;
    };
    /**
     * 设置预加载资源
     */
    CLoaderManager.prototype.setPreLoaderRes = function (preMap) {
        this.$preLoaderMap = [];
        for (var i = 0; i < preMap.length; i++) {
            var loaderData = preMap[i];
            loaderData.LoaderPrivorty = 0;
            loaderData.ExtarData = preMap.length;
            this.$preLoaderMap.push(loaderData);
            this.addLoader(loaderData);
        }
        preMap = null;
    };
    /**
     * 返回预加载资源是否加载完成
     */
    CLoaderManager.prototype.getPreLoaderComBool = function () {
        if (null != this.$preLoaderMap)
            return false;
        return true;
    };
    //========添加加载=========
    CLoaderManager.prototype.addLoader = function (loaderData) {
        if (true == Core.inst.resource.hasResourceByUrl(loaderData.LoaderType, loaderData.LoaderUrl)) {
            var comFun = loaderData.LoaderComFun;
            if (comFun != null)
                comFun();
            comFun = null;
            loaderData = null;
            return;
        }
        if (null == this.$loadFunDic.get(loaderData.LoaderUrl))
            this.$loadFunDic.set(loaderData.LoaderUrl, []);
        var funArr = this.$loadFunDic.get(loaderData.LoaderUrl);
        if (null != this.$curLoadDic.get(loaderData.LoaderUrl)) {
            if (null == loaderData.LoaderComFun && null == loaderData.LoaderErrorFun && null == loaderData.LoaderProFun)
                return;
            funArr.push({ comFun: loaderData.LoaderComFun, erroFun: loaderData.LoaderErrorFun, progressFun: loaderData.LoaderProFun });
            loaderData = null;
            funArr = null;
            return;
        }
        if (null != loaderData.LoaderComFun || null != loaderData.LoaderErrorFun && null != loaderData.LoaderProFun)
            funArr.push({ comFun: loaderData.LoaderComFun, erroFun: loaderData.LoaderErrorFun, progressFun: loaderData.LoaderProFun });
        funArr = null;
        if (0 == loaderData.LoaderPrivorty) {
            this.$loaderMap[0].push(loaderData);
        }
        else {
            var typeDic = this.$loaderMap[1].get(loaderData.LoaderType);
            typeDic.set(loaderData.LoaderUrl, loaderData);
            typeDic = null;
        }
        loaderData = null;
    };
    CLoaderManager.$open = false;
    CLoaderManager.$inst = null;
    CLoaderManager.LoaderTypeNum = 7; //加载类型数量
    CLoaderManager.LoaderType_ALTAS = 0; //图集类型
    CLoaderManager.LoaderType_TABLE = 1; //配置表类型
    CLoaderManager.LoaderType_FONT = 2; //位图字体类型
    CLoaderManager.LoaderType_IMAGE = 3; //纹理类型
    CLoaderManager.LoaderType_SOUND = 4; //声音类型
    CLoaderManager.LoaderType_TEXT = 5; //文本类型
    CLoaderManager.LoaderType_XML = 6; //XML类型
    CLoaderManager.LoaderType_SPINE = 7; //骨胳动画
    return CLoaderManager;
}());
//# sourceMappingURL=CLoaderManager.js.map