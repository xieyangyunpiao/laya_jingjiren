/*
* tang 背包模塊;
*/
class PackageHandler extends CHandler{
    constructor()
    {
       super();
       CHandler.msgHandler.set(NetCode.WSM_S_GET_BAG_INFO,this.recevei_10021.bind(this))
       CHandler.msgHandler.set(NetCode.WSM_S_GET_COUNTS_FRESH,this.recevei_11033.bind(this))
       CHandler.msgHandler.set(NetCode.WSM_S_GET_STATIC_FLAG,this.recevei_10176.bind(this))
       CHandler.msgHandler.set(NetCode.WSM_S_GET_MONTH_FLAG,this.recevei_10178.bind(this))
       CHandler.msgHandler.set(NetCode.WSM_S_GET_ARRAT_INFO,this.recevei_10179.bind(this))
    }
   /*
    背包信息
    */
    private recevei_10021(msg:any)
    {

    }

   /**
    * 获取次数统计
    */
    private recevei_11033(msg:any)
    {

    }
    /**
     * 
     * 静态标记信息 
     */
    private recevei_10176(msg:any)
    {

    }
    /**
     * 每月重置信息
     */
    private recevei_10178(msg:any)
    {

    }
   /**
    * 用数组标记的数据数据
    */
    private recevei_10179(msg:any)
    {

    }
}