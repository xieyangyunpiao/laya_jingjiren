/*
* tang;
*/
var CMessageFactory = /** @class */ (function () {
    function CMessageFactory() {
        if (false == CMessageFactory.$open) {
            console.log("错误实例化CMessageFactory,请通过CMessageFactory.inst实例化");
        }
        CMessageFactory.$inst = this;
    }
    Object.defineProperty(CMessageFactory, "inst", {
        get: function () {
            null == CMessageFactory.$inst && false == CMessageFactory.$open ? (CMessageFactory.$open = true) && new CMessageFactory() : 0;
            return CMessageFactory.$inst;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMessageFactory.prototype, "loginMessage", {
        /**
         * 登录消息
         */
        get: function () {
            if (null == this.$loginMessage)
                this.$loginMessage = new LoginMessage();
            return this.$loginMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMessageFactory.prototype, "roleMessage", {
        /**
         * 角色消息
         */
        get: function () {
            if (null == this.$roleMessage)
                this.$roleMessage = new RoleMessage();
            return this.$roleMessage;
        },
        enumerable: true,
        configurable: true
    });
    CMessageFactory.$inst = null;
    CMessageFactory.$open = false;
    return CMessageFactory;
}());
//# sourceMappingURL=CMessageFactory.js.map