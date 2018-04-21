/*
* tang 邮件通信;
*/
class MailHandler extends CHandler{
    constructor()
    {
     super();
     CHandler.msgHandler.set(NetCode.WSM_S_GET_EMAIL_INFO,this.recevei_10152.bind(this));
    }

    /**
     * 获取邮件信息
     */
    private recevei_10152():void 
    {

    }
}