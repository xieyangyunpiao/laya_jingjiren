var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var LoginHandler = /** @class */ (function (_super) {
    __extends(LoginHandler, _super);
    function LoginHandler() {
        return _super.call(this) || this;
        //   CHandler.msgHandler.set(NetCode.S_USER_REQEUST_LOGIN,this.recevei_10001.bind(this))
    }
    /**
     * 发送用户登录请求
     */
    LoginHandler.prototype.send_10001 = function (data) {
    };
    /**
     * 接收到服务器返回的登录请求
     */
    LoginHandler.prototype.recevei_10001 = function (data) {
        console.log("接收到服務器消息");
        Core.inst.msg.loginMessage.revcevidata = data;
    };
    return LoginHandler;
}(CHandler));
//# sourceMappingURL=LoginHandler.js.map