/*
* 章节通信;
*/
class ChapterHandler extends CHandler{
    constructor()
    {
    super();
    CHandler.msgHandler.set(NetCode.WSM_S_GET_STAGE_IONFO,this.recevei_10175.bind(this))
   }

    /**
     * 章节挑战相关信息
     */

    private recevei_10175(msg:any):void 
    {
       
    }
}