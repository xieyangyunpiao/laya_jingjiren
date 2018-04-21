/*
* tang 英雄通信;
*/
class HeroHandler extends CHandler{
    constructor()
    {
      super();
      CHandler.msgHandler.set(NetCode.WSM_S_HERO_ALL_LIST,this.recevei_11045.bind(this))
      CHandler.msgHandler.set(NetCode.WSM_S_HERO_JIBAN_UPDATA,this.recevei_10170.bind(this))
    }

   /**
    *  英雄信息
    */
    private recevei_11045(msg:any):void 
    {

    }
   /**
    * 羁绊信息
    */
    private recevei_10170(msg:any):void 
    {

    }


}