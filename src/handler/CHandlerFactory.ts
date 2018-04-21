/*
* tang;
*/
class CHandlerFactory
{

    private static $inst:CHandlerFactory = null;
    private static $open:boolean =false;
  
    private $loginHandelr:LoginHandler;//登陸通信模塊
    private $battleHandler:BattleHandler;//戰鬥通信模塊
    private $bagHandler:PackageHandler;//背包通信
    private $heroHandler:HeroHandler;//英雄通信
    private $mailHandler:MailHandler;//邮件通信
    private $territoryHandler:TerritoryHandler;//领地通信
    private $chapterHandler:ChapterHandler;//章节信息
    private $activateHandler:ActivateHandler;//活动通信
    constructor()
    {
        if(false == CHandlerFactory.$open)
        {
            throw Error("错误实例化CHandlerFactroy,请通过CHandlerFactory.inst实例化")
        }
        this.initHandler();
        CHandlerFactory.$inst = this;
    }
    
    private initHandler():void 
    {
        if(null == this.$loginHandelr)
        this.$loginHandelr = new LoginHandler();

        if(null == this.$battleHandler)
        this.$battleHandler = new BattleHandler();
        
        if(null == this.$bagHandler)
        this.$bagHandler = new PackageHandler();

        if(null == this.$heroHandler)
        this.$heroHandler = new HeroHandler();

        if(null == this.$mailHandler)
        this.$mailHandler = new MailHandler();

        if(null == this.$territoryHandler)
        this.$territoryHandler = new TerritoryHandler();

        if(null == this.$chapterHandler)
        this.$chapterHandler = new ChapterHandler();
        
        if(null == this.$activateHandler)
        this.$activateHandler = new ActivateHandler();

    }
    public get chapterHandler():ChapterHandler
    {
        return this.$chapterHandler;
    }

    public get loginHandler():LoginHandler
    {
        return this.$loginHandelr
    }

    public get battleHandler():BattleHandler
    {
        return this.$battleHandler;
    }

    public get packageBag():PackageHandler
    {
        return this.$bagHandler;
    }

    public get heroHandler():HeroHandler
    {
        return this.$heroHandler;
    }

    public get mailHandler():MailHandler
    {
        return this.$mailHandler;
    }

    public get territoryHandler():TerritoryHandler
    {
        return this.$territoryHandler;
    }
    public get activateHandler():ActivateHandler
    {
        return this.$activateHandler;
    }

    public static get inst():CHandlerFactory
    {
        null == CHandlerFactory.$inst && false == CHandlerFactory.$open?(CHandlerFactory.$open = true) && new  CHandlerFactory():0
        return CHandlerFactory.$inst;
    }

    
}