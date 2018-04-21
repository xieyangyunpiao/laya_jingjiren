/*
* tang;
*/
class CHandlerFactory
{

    private static $inst:CHandlerFactory = null;
    private static $open:boolean =false;
  
    private $loginHandelr:LoginHandler;//登陸通信模塊
    private $battleHandler:BattleHandler;//戰鬥通信模塊
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

    }

    public get LoginHandler()
    {
        return this.$loginHandelr
    }

    public get battleHandler()
    {
        return this.$battleHandler;
    }

    public static get inst():CHandlerFactory
    {
        null == CHandlerFactory.$inst && false == CHandlerFactory.$open?(CHandlerFactory.$open = true) && new  CHandlerFactory():0
        return CHandlerFactory.$inst;
    }

    
}