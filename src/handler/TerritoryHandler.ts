/*
* tang 领地通信;
*/
class TerritoryHandler extends CHandler{
    constructor()
    {
        super();
        CHandler.msgHandler.set(NetCode.WSM_S_TERRITORY_INFO,this.recevei_10291.bind(this))
    }
  /**
   * 接收领地数据
   */
    private recevei_10291(msg:any):void 
    {

    }
}