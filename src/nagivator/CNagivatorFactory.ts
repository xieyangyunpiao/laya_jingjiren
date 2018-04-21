/*
* tang 導航工廠;
*/
class CNagivatorFactory
{

    private static $inst:CNagivatorFactory = null;
    private static $open:boolean = false;
    private $nagivatorDic:Laya.Dictionary;
    constructor()
    {
         if(false == CNagivatorFactory.$open)
         {
             Error("錯誤實例化CNagivatorFactory,請通過CNagivatorFactory.inst實例化")
         }
         this.$nagivatorDic = new Laya.Dictionary();
         CNagivatorFactory.$inst = this;
    }


    public static get inst():CNagivatorFactory
    {
        null == CNagivatorFactory.$inst && false == CNagivatorFactory.$open ?(CNagivatorFactory.$open = true) && new CNagivatorFactory():0
        return CNagivatorFactory.$inst;
    }

 
    public getNagivator(id:any):CNagivator
    {
            if(null == this.$nagivatorDic.get(id))
            this.$nagivatorDic.set(id,new window[id]())
            return this.$nagivatorDic.get(id);
    }
}