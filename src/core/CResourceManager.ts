/*
* tang 资源管理;
*/
class  CResourceManager
{
    private static $open:boolean=false;
    private static $inst:CResourceManager = null;
    private $resMap:Array<any>;//加载映射表
    private $LoadfunDic:Laya.Dictionary;
    constructor()
    {
       if(false == CResourceManager.$open)
       {
           throw Error("错误实例化CResourceManager,请通过CResourceManager.inst实例化")
       }
       this.$LoadfunDic = new Laya.Dictionary();
       this.$resMap = [];
       for(let i = 0;i <= CLoaderManager.LoaderTypeNum;i++)
       this.$resMap.push(new Laya.Dictionary());
       Laya.ResourceManager.systemResourceManager.autoRelease = true;
       if(undefined == window["conch"])
       Laya.ResourceManager.systemResourceManager.autoReleaseMaxSize =  180 * 1024 * 1024;
       else
       Laya.ResourceManager.systemResourceManager.autoReleaseMaxSize =window["conch"].config.getAvalidMem()-1024*50;
       Laya.AtlasResourceManager.atlasLimitWidth = 256;
       Laya.AtlasResourceManager.atlasLimitHeight = 256;
       Laya.alertGlobalError = true; //捕获全局错误提示（用于移动端）
       CResourceManager.$inst = this;
    }
    public static get inst():CResourceManager
    {
        null == CResourceManager.$inst && false == CResourceManager.$open ?(CResourceManager.$open = true) && new CResourceManager():0
        return CResourceManager.$inst;
    }
    /**
     * 是否具有某个资源
     */
    public hasResourceByUrl(type:any,url:any):boolean
    { 
       let typeDic:Laya.Dictionary=this.$resMap[type];
       if(null != typeDic.get(url))
       return true;
       else
       return false;
    }
   /**
    *  添加资源
    */
    public addResource(type:any,url:string,loaderData:any):void 
    {
        let typeDic:Laya.Dictionary=this.$resMap[type];
        switch(type)
        {
            case CLoaderManager.LoaderType_TABLE:
            let tempArr:Array<any> =url.split("/")
            let tableName:any = String(tempArr[tempArr.length-1]).split(".")[0];
            typeDic.set(url,loaderData[tableName]);
            break;
            case CLoaderManager.LoaderType_IMAGE:
            typeDic.set(url,loaderData)
            break;
            case CLoaderManager.LoaderType_SPINE:
            typeDic.set(url,loaderData);
            break;
            case CLoaderManager.LoaderType_ALTAS:
            typeDic.set(url,loaderData);
            break;
        }
        CUtil.Log("資源所占用内存:"+(Laya.ResourceManager.systemResourceManager.memorySize/(1024*1024))+"M")
        loaderData = null;
    }
    /**
     * 返回纹理资源
     */
    public getImageResource(url:any,comFun:any = null ,progreFun:any = null ,errorFun:any =null ,privorty=1,extraData:any=null):any
    {
      let imgDic:Laya.Dictionary = this.$resMap[CLoaderManager.LoaderType_IMAGE];
      if(null == imgDic.get(url) )
      {
          let loaderData:LoaderData = new LoaderData();
          loaderData.LoaderType = CLoaderManager.LoaderType_IMAGE;
          loaderData.LoaderUrl = url;
          loaderData.LoaderComFun = comFun;
          loaderData.LoaderProFun = progreFun;
          loaderData.LoaderErrorFun = errorFun;
          loaderData.LoaderPrivorty = privorty;
          loaderData.ExtarData = extraData;
          Core.inst.load.addLoader(loaderData);
          return ;
      }
         return imgDic.get(url);
    }
    /**
     * 获取配置表资源
     */
    public getTableResource(url:any,comFun:any = null ,progreFun:any = null ,errorFun:any =null ,privorty=1,extraData:any=null):any
    {
      let jsonDic:Laya.Dictionary = this.$resMap[CLoaderManager.LoaderType_TABLE];
      if(null == jsonDic.get(url) )
      {
          let loaderData:LoaderData = new LoaderData();
          loaderData.LoaderType = CLoaderManager.LoaderType_TABLE;
          loaderData.LoaderUrl = url;
          loaderData.LoaderComFun = comFun;
          loaderData.LoaderProFun = progreFun;
          loaderData.LoaderErrorFun = errorFun;
          loaderData.LoaderPrivorty = privorty;
          loaderData.ExtarData = extraData;
          Core.inst.load.addLoader(loaderData);
          return ;
      }
      return new CObjctClone(jsonDic.get(url)); 
    }
    /**
     * 获取声音资源
     */
    public getSoundResource(url:any,comFun:any = null ,progreFun:any = null ,errorFun:any =null ,privorty=1,extraData:any=null):any
    {
      let soundDic:Laya.Dictionary = this.$resMap[CLoaderManager.LoaderType_SOUND];
      if(null == soundDic.get(url) )
      {
          let loaderData:LoaderData = new LoaderData();
          loaderData.LoaderType = CLoaderManager.LoaderType_SOUND;
          loaderData.LoaderUrl = url;
          loaderData.LoaderComFun = comFun;
          loaderData.LoaderProFun = progreFun;
          loaderData.LoaderErrorFun = errorFun;
          loaderData.LoaderPrivorty = privorty;
          loaderData.ExtarData = extraData;
          Core.inst.load.addLoader(loaderData);
          return ;
      }
         return soundDic.get(url) 
    }
    /**
     * 返回图集资源
     */
    public getAltasResource(url:any,comFun:any = null ,progreFun:any = null ,errorFun:any =null ,privorty=1,extraData:any=null):any 
    {
      let altasDic:Laya.Dictionary = this.$resMap[CLoaderManager.LoaderType_ALTAS];
      if(null == altasDic.get(url) )
      {
          let loaderData:LoaderData = new LoaderData();
          loaderData.LoaderType = CLoaderManager.LoaderType_ALTAS;
          loaderData.LoaderUrl = url;
          loaderData.LoaderComFun = comFun;
          loaderData.LoaderProFun = progreFun;
          loaderData.LoaderErrorFun = errorFun;
          loaderData.LoaderPrivorty = privorty;
          loaderData.ExtarData = extraData;
          Core.inst.load.addLoader(loaderData);
          return ;
      }
         return  altasDic.get(url) 
    }
    /**
     * 返回骨胳动画资源
     */
    public getSpineResource(url:any,comFun:any = null ,progreFun:any = null ,errorFun:any =null ,privorty=1,extraData:any=null):any
    {
      let spineDic:Laya.Dictionary = this.$resMap[CLoaderManager.LoaderType_SPINE];
      if(null == spineDic.get(url) )
      {
          let loaderData:LoaderData = new LoaderData();
          loaderData.LoaderType = CLoaderManager.LoaderType_SPINE;
          loaderData.LoaderUrl = url;
          loaderData.LoaderComFun = comFun;
          loaderData.LoaderProFun = progreFun;
          loaderData.LoaderErrorFun = errorFun;
          loaderData.ExtarData =extraData;
          loaderData.LoaderPrivorty = privorty;
          Core.inst.load.addLoader(loaderData);
          return ;
      }
      return spineDic.get(url) 
    }
   /**
    * 通过类型获得相应的骨胳资源
    */
    public getSpineResourceByType(type:any,id:any,comFun:any = null ,progreFun:any = null ,errorFun:any =null ,privorty=1,extraData:any=null)
    {
      let url = CPathConfig.getSpineAnimatonPath(type,id)
      let spineDic:Laya.Dictionary = this.$resMap[CLoaderManager.LoaderType_SPINE];
      if(null == spineDic.get(url) )
      {
          let loaderData:LoaderData = new LoaderData();
          loaderData.LoaderType = CLoaderManager.LoaderType_SPINE;
          loaderData.LoaderUrl = url;
          loaderData.LoaderComFun = comFun;
          loaderData.LoaderProFun = progreFun;
          loaderData.LoaderErrorFun = errorFun;
          loaderData.ExtarData =extraData;
          loaderData.LoaderPrivorty = privorty;
          Core.inst.load.addLoader(loaderData);
          return ;
      }
      return spineDic.get(url) 
    }
   /**
    * 得到動畫資源
    */
    public getAnimationResource(url:any,comFun:any = null ,progreFun:any = null ,errorFun:any =null ,privorty=1,extraData:any=null)
    {
      let aniDic:Laya.Dictionary = this.$resMap[CLoaderManager.LoaderType_ALTAS];
      if(null == aniDic.get(url) )
      {
          let loaderData:LoaderData = new LoaderData();
          loaderData.LoaderType = CLoaderManager.LoaderType_ALTAS;
          loaderData.LoaderUrl = url;
          loaderData.LoaderComFun = comFun;
          loaderData.LoaderProFun = progreFun;
          loaderData.LoaderErrorFun = errorFun;
          loaderData.ExtarData =extraData;
          loaderData.LoaderPrivorty = privorty;
          Core.inst.load.addLoader(loaderData);
          return ;
      }
      return aniDic.get(url) 
    }
    /**
     * 返回语言包
     */
    public getLanguage(wndID:any):any
    {
     let dic:Laya.Dictionary = this.$resMap[CLoaderManager.LoaderType_TABLE];
     let languageInfo:any = dic.get("table/language.json");
     return new CObjctClone(languageInfo[wndID]);

    }
   /**
    * 释放资源
    */
    public deleteResourceByUrl(type:any,url:any):void 
    {
     let dic:Laya.Dictionary = this.$resMap[type];
     dic.remove(url);
    }

  /**
   * Json资源的释放
   */
    public JsonResRelase(urlMap:Array<any>):void 
    { 
       for(let i = 0;i < urlMap.length;i++)
       {
       let jsonDic:Laya.Dictionary = this.$resMap[urlMap[i]["type"]]
       let url = urlMap[i].url;
       jsonDic.remove(url);
       Laya.loader.clearRes(url,true);
       CUtil.Log("释放资源:"+url);
       jsonDic = null;
       }
    }
}