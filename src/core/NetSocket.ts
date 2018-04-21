/*
* tang;
*/
class NetSocket{

    private static $inst:NetSocket = null;
    private static $open:boolean = false;

    private $m_socket:Laya.Socket;

    constructor()
    {

        if(false == NetSocket.$open)
        {
            Error("錯誤實例化NetSocket,請通過NetSocket.inst實例化")
        }
         this.$m_socket = new Laya.Socket();
         this.$m_socket.disableInput = true;
         CEventManager.inst.registerEvent(this.$m_socket,this,Laya.Event.OPEN,this.connectServerSucc)
         CEventManager.inst.registerEvent(this.$m_socket,this,Laya.Event.MESSAGE,this.reveveiMessage);
         CEventManager.inst.registerEvent(this.$m_socket,this,Laya.Event.CLOSE,this.closeSocket);
         CEventManager.inst.registerEvent(this.$m_socket,this,Laya.Event.ERROR,this.socketMessageError);
         NetSocket.$inst = this;
    }
    //========socket消息错误===========
    private socketMessageError():void 
    {
       CUtil.Log("连接服务器失败")
    }
    /*
    发送消息
     */
    public send(data:any):void 
    {
        this.$m_socket.send(data);
    }
    /**
     * 连接服务器成功
     */
    private connectServerSucc():void 
    {
       //console.log("连接服务器成功")
      // CLayerMananger.inst.openWindowByID(CWindowID.LOGIN_WINDOW,null);
       Laya.timer.loop(500,this,this.userHeartUpdata)
    }
   /**
    * 用户心跳更新
    */
    private userHeartUpdata():void
    {
         let msg = new Object();
         msg["msgid"] = NetCode.C_USER_HEART;
         this.$m_socket.send(msg);
    }

    public startConnect():void 
    {
        this.$m_socket.connectByUrl("ws://192.168.0.217:9001")
    }
    //======接受到服务器发送的消息========
    private reveveiMessage(message: any):void
    {
       let  msgobj:any = JSON.parse(message);
       let  fun:any=CHandler.msgHandler.get(msgobj["msgid"])
       fun(msgobj);
       msgobj = null;
    }
   //======关闭socket连接==========
    private closeSocket():void 
    {
       
    }

   /**
    * 重新進行鏈接
    */
    private reconnect():void 
    {

    }

    public static get inst():NetSocket
    {
       false == NetSocket.$open && null == NetSocket.$inst ?(NetSocket.$open = true) && new NetSocket():0
       return NetSocket.$inst;
    }

    
}