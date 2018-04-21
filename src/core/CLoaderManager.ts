/*
* tang 加载管理器;
*/
class CLoaderManager
{
    private static $open:boolean = false;
    private static $inst:CLoaderManager = null;

    public static  LoaderTypeNum:any=7;//加载类型数量
    public static  LoaderType_ALTAS:any = 0;//图集类型
    public static  LoaderType_TABLE:any = 1;//配置表类型
    public static  LoaderType_FONT:any = 2;//位图字体类型
    public static  LoaderType_IMAGE:any = 3;//纹理类型
    public static  LoaderType_SOUND:any = 4;//声音类型
    public static  LoaderType_TEXT:any=5;//文本类型
    public static  LoaderType_XML:any= 6;//XML类型
    public static  LoaderType_SPINE:any =7;//骨胳动画
    private $loaderPriTeam:any = 2;//加载优先队列为2个等级 0为最高优先等级(一般用于预加载)
    private $preLoaderMap:Array<any>=null;//预加载列表
    private $loaderMap:Array<any>;//加载映射表
    private $curLoadDic:Laya.Dictionary;//当前加载列表
    private $loadFunDic:Laya.Dictionary;//加载回调函数的映射表
    private $maxLoadLine:number = 10;//最大加载队列
    constructor()
    {
        if(false == CLoaderManager.$open)
        {
          throw Error("\n错误实例化CLoaderMannager,请通过CLoaderMannager.inst实例化");
        }
        Laya.loader.retryNum=0;
        Laya.loader.maxLoader = this.$maxLoadLine;
        if(Laya.Render.isWebGL)
        {   
        Laya.WorkerLoader.workerPath = "libs/worker.js";
        Laya.WorkerLoader.enable = true;
        }
        this.$loaderMap =[[],new Laya.Dictionary()];
        let loadDic:Laya.Dictionary = this.$loaderMap[1];
        for(let i =0 ;i <= CLoaderManager.LoaderTypeNum;i++)
        loadDic.set(i,new Laya.Dictionary());
        this.$curLoadDic = new Laya.Dictionary();
        this.$loadFunDic = new Laya.Dictionary();
        Laya.timer.loop(100,this,this.startLoader);
        CLoaderManager.$inst = this;
        Laya.loader.on(Laya.Event.ERROR,this,this.loaderResourError)
    }
    public static get inst():CLoaderManager
    {
        false == CLoaderManager.$open && null == CLoaderManager.$inst?(CLoaderManager.$open = true) && new CLoaderManager():0
        return CLoaderManager.$inst;
    }
    
    //========开始加载=======
    private startLoader():void 
    {
       
       if(this.$curLoadDic.keys.length <= this.$maxLoadLine) 
       {
         let loaderDic:Laya.Dictionary = <Laya.Dictionary>this.$loaderMap[1];
         for(let  i=0; i < loaderDic.keys.length;i++)
         {  
             let typeDic:Laya.Dictionary = loaderDic.get(loaderDic.keys[i])
             for(let j=0; this.$curLoadDic.keys.length < this.$maxLoadLine && (this.$loaderMap[0].length >0 || j < typeDic.keys.length);j++)
             {
                 let loaderData:LoaderData;
                 if(this.$loaderMap[0].length >0)//如果存在优先加载
                 {
                   loaderData =this.$loaderMap[0].shift();
                   this.$curLoadDic.set(loaderData.LoaderUrl,loaderData);
                 }
                 else
                 {
                   loaderData =typeDic.get(typeDic.keys[j]);
                   this.$curLoadDic.set(loaderData.LoaderUrl,loaderData);
                   typeDic.remove(loaderData.LoaderUrl);
                 }
                  this.begingLoader(loaderData);
                  loaderData = null;
             }
            typeDic = null;
         }
           loaderDic = null;
       }
    }
    private begingLoader(loaderData:LoaderData):void 
    {
        switch(loaderData.LoaderType)
        {
            case CLoaderManager.LoaderType_TABLE:
            Laya.loader.load(loaderData.LoaderUrl,Laya.Handler.create(this,this.loaderResourCom,[loaderData,Laya.loader]),Laya.Handler.create(this,this.loaderResourPro,[loaderData,Laya.loader]),laya.net.Loader.JSON);
            break;
            case CLoaderManager.LoaderType_IMAGE:
            Laya.loader.load(loaderData.LoaderUrl,Laya.Handler.create(this,this.loaderResourCom,[loaderData,Laya.loader]),Laya.Handler.create(this,this.loaderResourPro,[loaderData,Laya.loader]),Laya.Loader.IMAGE);
            break;
            case CLoaderManager.LoaderType_ALTAS:
            Laya.loader.load(loaderData.LoaderUrl,Laya.Handler.create(this,this.loaderResourCom,[loaderData,Laya.loader]),Laya.Handler.create(this,this.loaderResourPro,[loaderData,Laya.loader]),laya.net.Loader.ATLAS);
            break;
            case CLoaderManager.LoaderType_SPINE:
            let templet:Laya.Templet = new Laya.Templet();
            templet.on(Laya.Event.COMPLETE,this,this.loaderResourCom,[loaderData,templet])
            templet.loadAni(loaderData.LoaderUrl);
            templet = null;
            break;

        }
        loaderData = null;
    }
    /**
     *资源加载完成
     */
    private loaderResourCom(loaderData:LoaderData,target:any):void 
    {   
  
        CUtil.Log(loaderData.LoaderUrl+"加載完畢")
        this.$curLoadDic.remove(loaderData.LoaderUrl);
        switch(loaderData.LoaderType)
        {
            case CLoaderManager.LoaderType_TABLE:
            case CLoaderManager.LoaderType_IMAGE:
            case CLoaderManager.LoaderType_ALTAS:
            Core.inst.resource.addResource(loaderData.LoaderType,loaderData.LoaderUrl,target.getRes(loaderData.LoaderUrl));
            break;
            case CLoaderManager.LoaderType_SPINE:
            Core.inst.resource.addResource(loaderData.LoaderType,loaderData.LoaderUrl,target);
            break;
        }
        let funArr:Array<any> = this.$loadFunDic.get(loaderData.LoaderUrl);
        if(null != funArr)
        {
            for(let i = 0;i < funArr.length ;i++)
            {
                let comFun:any = funArr[i].comFun;
                if(null != comFun)
                {
                 null != loaderData.ExtarData ?comFun(loaderData.LoaderUrl,loaderData.ExtarData):comFun(loaderData.LoaderUrl);
                }
            }
        funArr.length = 0;
        this.$loadFunDic.remove(loaderData.LoaderUrl);
        funArr = null;
       }
        if(null != this.$preLoaderMap)
        {
            let index:any = this.$preLoaderMap.indexOf(loaderData);
            if(-1 != index)
            {

            //  let loadWin:LodingWindow = Core.inst.wndFactory.getWindowByID(CWindowID.LODING_WINDOW);
            //  loadWin.loaderPercent = (loaderData.ExtarData - this.$preLoaderMap.length)/loaderData.ExtarData  
              this.$preLoaderMap.splice(index,1);
          //    CUtil.Log("预加载资源:"+loaderData.LoaderUrl+"加载完毕")
            }
            if(0 == this.$preLoaderMap.length)
            {
            this.$preLoaderMap = null;
            CUtil.Log("所有预加载资源加载完毕:"+new Date());
                   Core.inst.layer.openWindowByID(CWindowID.BATTLE_WINDOW,null);
          //  Core.inst.layer.openWindowByID(CWindowID.BATTLE_WINDOW,null);
            }            
        }
        loaderData = null;
        target = null;
    }
    /**
     * 加载过程回调
     */
    private loaderResourPro(loaderData:LoaderData)
    {
        loaderData = null;
    }
    /**
     * 加载错误回调
     */
    private loaderResourError(url:any)
    {
    CUtil.Log("加载资源:"+url+"错误")
    let loaderData:LoaderData = this.$curLoadDic.get(url)
    if(null != loaderData)
    {
       this.$curLoadDic.remove(loaderData.LoaderUrl);
       let funArr:Array<any> = this.$loadFunDic.get(url);
       if(null != funArr)
       {
        for(let i = 0;i < funArr.length;i++)
        {
            let errorFun:any =funArr[i].erroFun;
            if(null != errorFun)
            errorFun();
        }
        funArr.length = 0;
        funArr = null;
        this.$loadFunDic.remove(url)
       }
    }
    loaderData = null;
  } 
   /**
    * 设置预加载资源
    */
   public setPreLoaderRes(preMap:Array<LoaderData>):void 
   {
       this.$preLoaderMap=[];
       for(let i = 0;i < preMap.length ;i++)
       {
        let loaderData:LoaderData = preMap[i];
        loaderData.LoaderPrivorty=0;
        loaderData.ExtarData = preMap.length;
        this.$preLoaderMap.push(loaderData)
        this.addLoader(loaderData)
       }
       preMap = null;
   }
   /**
    * 返回预加载资源是否加载完成
    */
   public getPreLoaderComBool():boolean
   {
         if(null != this.$preLoaderMap)
         return false;
         return true;
   }
   //========添加加载=========
    public addLoader(loaderData:LoaderData):void 
    {  
       if(true ==  Core.inst.resource.hasResourceByUrl(loaderData.LoaderType,loaderData.LoaderUrl))//如果已经加载了该资源
       {
           let comFun = loaderData.LoaderComFun;
           if(comFun != null)
           comFun();
           comFun = null;
           loaderData = null;
           return ;
       }
       if(null == this.$loadFunDic.get(loaderData.LoaderUrl))//初始化加载回调函数
       this.$loadFunDic.set(loaderData.LoaderUrl,[]);
       let funArr = this.$loadFunDic.get(loaderData.LoaderUrl);
       if(null != this.$curLoadDic.get(loaderData.LoaderUrl))//如果当前正在加载
       {
           if(null == loaderData.LoaderComFun && null == loaderData.LoaderErrorFun && null == loaderData.LoaderProFun)
           return ;
           funArr.push({comFun:loaderData.LoaderComFun,erroFun:loaderData.LoaderErrorFun,progressFun:loaderData.LoaderProFun})
           loaderData = null;
           funArr = null;
           return ;
       }
         if(null != loaderData.LoaderComFun || null != loaderData.LoaderErrorFun && null != loaderData.LoaderProFun)
         funArr.push({comFun:loaderData.LoaderComFun,erroFun:loaderData.LoaderErrorFun,progressFun:loaderData.LoaderProFun});
         funArr = null;
         if(0 == loaderData.LoaderPrivorty)//如果是优先加载
         {
          this.$loaderMap[0].push(loaderData)
         }
         else
         {
         let typeDic:Laya.Dictionary = (<Laya.Dictionary>this.$loaderMap[1]).get(loaderData.LoaderType);
         typeDic.set(loaderData.LoaderUrl,loaderData);
         typeDic = null;
         }
         loaderData = null;
    }
}