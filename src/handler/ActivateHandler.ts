/*
* tang 活动通信;
*/
class ActivateHandler extends CHandler{
    constructor()
    {
      super();
      CHandler.msgHandler.set(NetCode.WSM_S_BUS_ACT_STATE,this.recevei_11024.bind(this))
      CHandler.msgHandler.set(NetCode.WSM_S_GIFT_LIMIT_NUM,this.recevei_11208.bind(this))
      CHandler.msgHandler.set(NetCode.WSM_S_DOUBLE_ACTIVE,this.recevei_11340.bind(this))
    }
  /**
   *  商业开服活动状态 
   */
    private recevei_11024(msg:any):void 
    {

    }
/**
 * 福利抢购 物品购买数量
 */
    private recevei_11208(msg:any):void 
    {

    }
/**
 * 双倍活动
 */
    private recevei_11340(msg:any):void 
    {

    }
}