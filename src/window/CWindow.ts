/*
* name;
*/
class CWindow  extends Laya.Sprite
{
    
    public static WINODW_TYPE_INPORTANT:any = 1;//核心界面
    public static WINODW_TYPE_NORMALL:any = 2;//普通界面;
    public static WINDOW_TYPE_GARBAGE:any = 3;//立即销毁界面

    public static $winResLoadBool:boolean =false;//窗口资源是否正在进行加载
    protected $windDefaultSkin:any="";//界面默認皮膚
    protected $windOpen:boolean = false;//窗口是否打开
    protected $childWinDic:Laya.Dictionary;//子界面映射表
    protected $winResUrl:Array<any>;//界面资源路径[{type..,url..}]
    protected $cloneWinResUrl:Array<any>;//界面资源路径副本
    protected $isWinClose:boolean=true;//是否支持统一关闭操作
    protected $winPreOpenTimer:any=null;//界面上次打开时间(用于资源释放的依据)
    protected $winOpenNum:any=0;//界面打开次数(用于资源释放的依据)
    protected $windID:any ;//界面ID
    protected $data:any=null;//界面数据
    protected $winValue:any = 2;//界面权重 1:核心界面 2:普通界面,3:立即销货界面 (用于资源释放的依据)
    protected $eventMap:Array<any>=[];//注册事件映射表[{target:..,caller:....,type:...,fun:...}]
    protected $ui:any;
    constructor(resurl:any=null)
    {
    super();
    this.$winResUrl = resurl;
    this.$cloneWinResUrl =[];
    if(null != this.$winResUrl)
    this.$cloneWinResUrl = this.$cloneWinResUrl.concat(this.$winResUrl);
    this.viewport = new Laya.Rectangle(0,0,GameConfig.STAGE_WIDTH,GameConfig.STAGE_HEIGHT);
    this.width=GameConfig.STAGE_WIDTH;
    this.height =GameConfig.STAGE_HEIGHT;
    //===================窗口资源的加载======================
     if(null != this.$winResUrl && 0 != this.$winResUrl.length)
     {
          for(let i = 0;i < this.$winResUrl.length ; i++)
          {
          if(false ==  Core.inst.resource.hasResourceByUrl(this.$winResUrl[i].type,this.$winResUrl[i].url))
          {
            switch(this.$winResUrl[i].type)
            { 
               case CLoaderManager.LoaderType_ALTAS:
                Core.inst.resource.getAltasResource(this.$winResUrl[i].url,this.loadWinResCom.bind(this),this.loadWinResProgress,this.loadWinResError);
               break;
               case CLoaderManager.LoaderType_TABLE:
                Core.inst.resource.getTableResource(this.$winResUrl[i].url,this.loadWinResCom.bind(this),this.loadWinResProgress,this.loadWinResError);
               break;
               case CLoaderManager.LoaderType_SPINE:
                Core.inst.resource.getSpineResource(this.$winResUrl[i].url,this.loadWinResCom.bind(this),this.loadWinResProgress,this.loadWinResError);
               break;
               case CLoaderManager.LoaderType_SOUND:
               Core.inst.resource.getSoundResource(this.$winResUrl[i].url,this.loadWinResCom.bind(this),this.loadWinResProgress,this.loadWinResError);
               break;
               case CLoaderManager.LoaderType_IMAGE:
               Core.inst.resource.getImageResource(this.$winResUrl[i].url,this.loadWinResCom.bind(this),this.loadWinResProgress,this.loadWinResError);
               break;
            }
          }
          else
          {
             this.$winResUrl.splice(i,1)
          }
          }
          CWindow.$winResLoadBool = true;
          resurl = null;
      }
      else
      {
        this.globalInit();
      }
      //=======默认皮肤的加载========
         if(""!=this.$windDefaultSkin)
         {
          if(null ==  Core.inst.resource.hasResourceByUrl(CLoaderManager.LoaderType_IMAGE,this.$windDefaultSkin))
           Core.inst.resource.getImageResource(this.$windDefaultSkin,this.loadDefaultSkinComFun.bind(this))
          else
          this.graphics.drawTexture( Core.inst.resource.getImageResource(this.$windDefaultSkin))
         }
          this.$eventMap=[];
    }
    /**
     * 默认皮肤加载完成
     */
    private loadDefaultSkinComFun(url:any):void 
    {
      let texture:Laya.Texture = new Laya.Texture();
      this.graphics.drawTexture(texture);
      this.width =texture.width;
      this.height =texture.height;
      texture = null;
    }
    /**
     * 界面ID
     */
    public set windID(value:any){this.$windID =value}
    public get windID():any{return this.$windID}
   /**
    * 返回界面资源路径
    */
    public get winResUrl():any{return this.$cloneWinResUrl}
    /**
     * 界面打开次数
     */
    public set winOpenNum(value:any){this.$winOpenNum = value};
    public get winOpenNum():any{return this.$winOpenNum};
    /**
     * 界面上次打开时间
     */
    public set winOpenTimer(value:any){this.$winPreOpenTimer =value};
    public get winOpenTimer(){return this.$winPreOpenTimer};
    /**
     * 加载界面资源完毕
     */
    private loadWinResCom(url:any):void 
    {  
       for(let i = 0;i < this.$winResUrl.length;i++)
       {
         if(this.$winResUrl[i].url == url)
         this.$winResUrl.splice(i,1);
       }
       if(0 == this.$winResUrl.length)
       {
       CWindow.$winResLoadBool = false;
       this.globalInit();
       }
       url="";
    }
   /**
    * 全局的初始化
    */
    public globalInit():void 
    {
         this.instanceinit();
         this.eventInit();
    }
    /**
     * 实例的初始化
     */
    protected instanceinit():void 
    {

    }
    /**
     * 事件的初始化
     */
    protected eventInit():void 
    {
      for(let i = 0;i < this.$eventMap.length;i++)
      CEventManager.inst.registerEvent(this.$eventMap[i].target,this.$eventMap[i].caller,this.$eventMap[i].type,this.$eventMap[i].fun);
    }
   /**
   * 加载界面资源过程
   */
    private loadWinResProgress():void 
    {
      console.log("窗口资源加载中")
    }
    /**
     * 加载界面资源错误
     */
    private loadWinResError():void 
    {
      CWindow.$winResLoadBool= false;
    }
    /**
     * 返回界面权重
     */
    public get winValue():any{return this.$winValue}

    /**
     * 返回当前界面的打开状态
     */
    public get windOpen():any{return this.$windOpen}
    /**
     * 设置当前界面的打开状态
     */
    public set windOpen(value:any){this.$windOpen = value}
    /**
     * 返回是否支持统一关闭操作
     */
    public get isWinClose():boolean{return this.$isWinClose}

    /**
     * 控件的回收
     */
    public controlRecover():void 
    {
      for(let i = 0;i < this.$eventMap.length;i++)
      CEventManager.inst.removeEven(this.$eventMap[i].target,this.$eventMap[i].caller,this.$eventMap[i].type,this.$eventMap[i].fun);
      null != this.$ui && this.$ui.destroy(true);
      this.removeChild(this.$ui);
    }
    /**
      * 设置数据
    */
    public set data(value:any)
    {
      this.$data =value;
    }
}