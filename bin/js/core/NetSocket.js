/*
* tang;
*/
var NetSocket = /** @class */ (function () {
    function NetSocket() {
        if (false == NetSocket.$open) {
            Error("錯誤實例化NetSocket,請通過NetSocket.inst實例化");
        }
        this.$m_socket = new Laya.Socket();
        this.$m_socket.disableInput = true;
        CEventManager.inst.registerEvent(this.$m_socket, this, Laya.Event.OPEN, this.connectServerSucc);
        CEventManager.inst.registerEvent(this.$m_socket, this, Laya.Event.MESSAGE, this.reveveiMessage);
        CEventManager.inst.registerEvent(this.$m_socket, this, Laya.Event.CLOSE, this.closeSocket);
        CEventManager.inst.registerEvent(this.$m_socket, this, Laya.Event.ERROR, this.socketMessageError);
        NetSocket.$inst = this;
    }
    //========socket消息错误===========
    NetSocket.prototype.socketMessageError = function () {
        CUtil.Log("连接服务器失败");
    };
    /*
    发送消息
     */
    NetSocket.prototype.send = function (data) {
        var strMsg = JSON.stringify(data);
        this.$m_socket.send(strMsg);
    };
    /**
     * 连接服务器成功
     */
    NetSocket.prototype.connectServerSucc = function () {
        console.log("连接服务器成功");
        Core.inst.handler.loginHandler.send_10001();
        //CEventManager.inst.dispatchEvent(Core.inst.wndFactory.getWindowByID(CWindowID.LOGIN_WINDOW),LoginEvent.ROLE_LOGIN_SUCC)
    };
    /**
     * 用户心跳更新
     */
    NetSocket.prototype.userHeartUpdata = function () {
        var msg = new Object();
        //  msg["msgid"] = NetCode.C_USER_HEART;
        this.$m_socket.send(msg);
    };
    NetSocket.prototype.startConnect = function (addr) {
        this.$m_socket.connectByUrl(addr); //"ws://192.168.0.217:9001"
    };
    //======接受到服务器发送的消息========
    NetSocket.prototype.reveveiMessage = function (message) {
        var msgobj = JSON.parse(message);
        CUtil.Log("接收到消息:" + msgobj["msgid"]);
        var fun = CHandler.msgHandler.get(msgobj["msgid"]);
        fun(msgobj);
        msgobj = null;
    };
    //======关闭socket连接==========
    NetSocket.prototype.closeSocket = function () {
    };
    /**
     * 重新進行鏈接
     */
    NetSocket.prototype.reconnect = function () {
    };
    Object.defineProperty(NetSocket, "inst", {
        get: function () {
            false == NetSocket.$open && null == NetSocket.$inst ? (NetSocket.$open = true) && new NetSocket() : 0;
            return NetSocket.$inst;
        },
        enumerable: true,
        configurable: true
    });
    NetSocket.$inst = null;
    NetSocket.$open = false;
    return NetSocket;
}());
//# sourceMappingURL=NetSocket.js.map