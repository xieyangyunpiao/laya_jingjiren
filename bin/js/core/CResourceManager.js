/*
* tang 资源管理;
*/
var CResourceManager = /** @class */ (function () {
    function CResourceManager() {
        if (false == CResourceManager.$open) {
            throw Error("错误实例化CResourceManager,请通过CResourceManager.inst实例化");
        }
        this.$LoadfunDic = new Laya.Dictionary();
        this.$resMap = [];
        for (var i = 0; i <= CLoaderManager.LoaderTypeNum; i++)
            this.$resMap.push(new Laya.Dictionary());
        Laya.ResourceManager.systemResourceManager.autoRelease = true;
        if (undefined == window["conch"])
            Laya.ResourceManager.systemResourceManager.autoReleaseMaxSize = 180 * 1024 * 1024;
        else
            Laya.ResourceManager.systemResourceManager.autoReleaseMaxSize = window["conch"].config.getAvalidMem() - 1024 * 50;
        Laya.AtlasResourceManager.atlasLimitWidth = 256;
        Laya.AtlasResourceManager.atlasLimitHeight = 256;
        Laya.alertGlobalError = true; //捕获全局错误提示（用于移动端）
        CResourceManager.$inst = this;
    }
    Object.defineProperty(CResourceManager, "inst", {
        get: function () {
            null == CResourceManager.$inst && false == CResourceManager.$open ? (CResourceManager.$open = true) && new CResourceManager() : 0;
            return CResourceManager.$inst;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 是否具有某个资源
     */
    CResourceManager.prototype.hasResourceByUrl = function (type, url) {
        var typeDic = this.$resMap[type];
        if (null != typeDic.get(url))
            return true;
        else
            return false;
    };
    /**
     *  添加资源
     */
    CResourceManager.prototype.addResource = function (type, url, loaderData) {
        var typeDic = this.$resMap[type];
        switch (type) {
            case CLoaderManager.LoaderType_TABLE:
                var tempArr = url.split("/");
                var tableName = String(tempArr[tempArr.length - 1]).split(".")[0];
                typeDic.set(url, loaderData[tableName]);
                break;
            case CLoaderManager.LoaderType_IMAGE:
                typeDic.set(url, loaderData);
                break;
            case CLoaderManager.LoaderType_SPINE:
                typeDic.set(url, loaderData);
                break;
            case CLoaderManager.LoaderType_ALTAS:
                typeDic.set(url, loaderData);
                break;
        }
        CUtil.Log("資源所占用内存:" + (Laya.ResourceManager.systemResourceManager.memorySize / (1024 * 1024)) + "M");
        loaderData = null;
    };
    /**
     * 返回纹理资源
     */
    CResourceManager.prototype.getImageResource = function (url, comFun, progreFun, errorFun, privorty, extraData) {
        if (comFun === void 0) { comFun = null; }
        if (progreFun === void 0) { progreFun = null; }
        if (errorFun === void 0) { errorFun = null; }
        if (privorty === void 0) { privorty = 1; }
        if (extraData === void 0) { extraData = null; }
        var imgDic = this.$resMap[CLoaderManager.LoaderType_IMAGE];
        if (null == imgDic.get(url)) {
            var loaderData = new LoaderData();
            loaderData.LoaderType = CLoaderManager.LoaderType_IMAGE;
            loaderData.LoaderUrl = url;
            loaderData.LoaderComFun = comFun;
            loaderData.LoaderProFun = progreFun;
            loaderData.LoaderErrorFun = errorFun;
            loaderData.LoaderPrivorty = privorty;
            loaderData.ExtarData = extraData;
            Core.inst.load.addLoader(loaderData);
            return;
        }
        return imgDic.get(url);
    };
    /**
     * 获取配置表资源
     */
    CResourceManager.prototype.getTableResource = function (url, comFun, progreFun, errorFun, privorty, extraData) {
        if (comFun === void 0) { comFun = null; }
        if (progreFun === void 0) { progreFun = null; }
        if (errorFun === void 0) { errorFun = null; }
        if (privorty === void 0) { privorty = 1; }
        if (extraData === void 0) { extraData = null; }
        var jsonDic = this.$resMap[CLoaderManager.LoaderType_TABLE];
        if (null == jsonDic.get(url)) {
            var loaderData = new LoaderData();
            loaderData.LoaderType = CLoaderManager.LoaderType_TABLE;
            loaderData.LoaderUrl = url;
            loaderData.LoaderComFun = comFun;
            loaderData.LoaderProFun = progreFun;
            loaderData.LoaderErrorFun = errorFun;
            loaderData.LoaderPrivorty = privorty;
            loaderData.ExtarData = extraData;
            Core.inst.load.addLoader(loaderData);
            return;
        }
        return new CObjctClone(jsonDic.get(url));
    };
    /**
     * 获取声音资源
     */
    CResourceManager.prototype.getSoundResource = function (url, comFun, progreFun, errorFun, privorty, extraData) {
        if (comFun === void 0) { comFun = null; }
        if (progreFun === void 0) { progreFun = null; }
        if (errorFun === void 0) { errorFun = null; }
        if (privorty === void 0) { privorty = 1; }
        if (extraData === void 0) { extraData = null; }
        var soundDic = this.$resMap[CLoaderManager.LoaderType_SOUND];
        if (null == soundDic.get(url)) {
            var loaderData = new LoaderData();
            loaderData.LoaderType = CLoaderManager.LoaderType_SOUND;
            loaderData.LoaderUrl = url;
            loaderData.LoaderComFun = comFun;
            loaderData.LoaderProFun = progreFun;
            loaderData.LoaderErrorFun = errorFun;
            loaderData.LoaderPrivorty = privorty;
            loaderData.ExtarData = extraData;
            Core.inst.load.addLoader(loaderData);
            return;
        }
        return soundDic.get(url);
    };
    /**
     * 返回图集资源
     */
    CResourceManager.prototype.getAltasResource = function (url, comFun, progreFun, errorFun, privorty, extraData) {
        if (comFun === void 0) { comFun = null; }
        if (progreFun === void 0) { progreFun = null; }
        if (errorFun === void 0) { errorFun = null; }
        if (privorty === void 0) { privorty = 1; }
        if (extraData === void 0) { extraData = null; }
        var altasDic = this.$resMap[CLoaderManager.LoaderType_ALTAS];
        if (null == altasDic.get(url)) {
            var loaderData = new LoaderData();
            loaderData.LoaderType = CLoaderManager.LoaderType_ALTAS;
            loaderData.LoaderUrl = url;
            loaderData.LoaderComFun = comFun;
            loaderData.LoaderProFun = progreFun;
            loaderData.LoaderErrorFun = errorFun;
            loaderData.LoaderPrivorty = privorty;
            loaderData.ExtarData = extraData;
            Core.inst.load.addLoader(loaderData);
            return;
        }
        return altasDic.get(url);
    };
    /**
     * 返回骨胳动画资源
     */
    CResourceManager.prototype.getSpineResource = function (url, comFun, progreFun, errorFun, privorty, extraData) {
        if (comFun === void 0) { comFun = null; }
        if (progreFun === void 0) { progreFun = null; }
        if (errorFun === void 0) { errorFun = null; }
        if (privorty === void 0) { privorty = 1; }
        if (extraData === void 0) { extraData = null; }
        var spineDic = this.$resMap[CLoaderManager.LoaderType_SPINE];
        if (null == spineDic.get(url)) {
            var loaderData = new LoaderData();
            loaderData.LoaderType = CLoaderManager.LoaderType_SPINE;
            loaderData.LoaderUrl = url;
            loaderData.LoaderComFun = comFun;
            loaderData.LoaderProFun = progreFun;
            loaderData.LoaderErrorFun = errorFun;
            loaderData.ExtarData = extraData;
            loaderData.LoaderPrivorty = privorty;
            Core.inst.load.addLoader(loaderData);
            return;
        }
        return spineDic.get(url);
    };
    /**
     * 通过类型获得相应的骨胳资源
     */
    CResourceManager.prototype.getSpineResourceByType = function (type, id, comFun, progreFun, errorFun, privorty, extraData) {
        if (comFun === void 0) { comFun = null; }
        if (progreFun === void 0) { progreFun = null; }
        if (errorFun === void 0) { errorFun = null; }
        if (privorty === void 0) { privorty = 1; }
        if (extraData === void 0) { extraData = null; }
        var url = CPathConfig.getSpineAnimatonPath(type, id);
        var spineDic = this.$resMap[CLoaderManager.LoaderType_SPINE];
        if (null == spineDic.get(url)) {
            var loaderData = new LoaderData();
            loaderData.LoaderType = CLoaderManager.LoaderType_SPINE;
            loaderData.LoaderUrl = url;
            loaderData.LoaderComFun = comFun;
            loaderData.LoaderProFun = progreFun;
            loaderData.LoaderErrorFun = errorFun;
            loaderData.ExtarData = extraData;
            loaderData.LoaderPrivorty = privorty;
            Core.inst.load.addLoader(loaderData);
            return;
        }
        return spineDic.get(url);
    };
    /**
     * 得到動畫資源
     */
    CResourceManager.prototype.getAnimationResource = function (url, comFun, progreFun, errorFun, privorty, extraData) {
        if (comFun === void 0) { comFun = null; }
        if (progreFun === void 0) { progreFun = null; }
        if (errorFun === void 0) { errorFun = null; }
        if (privorty === void 0) { privorty = 1; }
        if (extraData === void 0) { extraData = null; }
        var aniDic = this.$resMap[CLoaderManager.LoaderType_ALTAS];
        if (null == aniDic.get(url)) {
            var loaderData = new LoaderData();
            loaderData.LoaderType = CLoaderManager.LoaderType_ALTAS;
            loaderData.LoaderUrl = url;
            loaderData.LoaderComFun = comFun;
            loaderData.LoaderProFun = progreFun;
            loaderData.LoaderErrorFun = errorFun;
            loaderData.ExtarData = extraData;
            loaderData.LoaderPrivorty = privorty;
            Core.inst.load.addLoader(loaderData);
            return;
        }
        return aniDic.get(url);
    };
    /**
     * 返回语言包
     */
    CResourceManager.prototype.getLanguage = function (wndID) {
        var dic = this.$resMap[CLoaderManager.LoaderType_TABLE];
        var languageInfo = dic.get("table/language.json");
        return new CObjctClone(languageInfo[wndID]);
    };
    /**
     * 释放资源
     */
    CResourceManager.prototype.deleteResourceByUrl = function (type, url) {
        var dic = this.$resMap[type];
        dic.remove(url);
    };
    /**
     * Json资源的释放
     */
    CResourceManager.prototype.JsonResRelase = function (urlMap) {
        for (var i = 0; i < urlMap.length; i++) {
            var jsonDic = this.$resMap[urlMap[i]["type"]];
            var url = urlMap[i].url;
            jsonDic.remove(url);
            Laya.loader.clearRes(url, true);
            CUtil.Log("释放资源:" + url);
            jsonDic = null;
        }
    };
    CResourceManager.$open = false;
    CResourceManager.$inst = null;
    return CResourceManager;
}());
//# sourceMappingURL=CResourceManager.js.map