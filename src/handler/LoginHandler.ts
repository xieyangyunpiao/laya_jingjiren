/*
* name;
*/
class LoginHandler extends CHandler
{
    constructor()
    {
       super();
    //   CHandler.msgHandler.set(NetCode.S_USER_REQEUST_LOGIN,this.recevei_10001.bind(this))
    }
    /**
     * 发送用户登录请求
     */
    public send_10001(data:any)
    {

    }
   /**
    * 接收到服务器返回的登录请求
    */
    public recevei_10001(data:any)
    {
        console.log("接收到服務器消息")
        Core.inst.msg.loginMessage.revcevidata= data;
    }
    
}