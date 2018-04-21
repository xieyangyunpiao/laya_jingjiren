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
        var _this = _super.call(this) || this;
        CHandler.msgHandler.set(NetCode.WSM_S_AUTH_RULT, _this.recevei_10002.bind(_this));
        CHandler.msgHandler.set(NetCode.WSM_S_LOGIN_OK, _this.recevei_15021.bind(_this));
        CHandler.msgHandler.set(NetCode.WSM_S_OFFLINE_PROFIT_INFO, _this.recevei_15019.bind(_this));
        CHandler.msgHandler.set(NetCode.WSM_S_Drop, _this.recevei_15023.bind(_this));
        CHandler.msgHandler.set(NetCode.WSM_S_ONLINE_INFO, _this.recevei_10010.bind(_this));
        CHandler.msgHandler.set(NetCode.WSM_S_ONLINE_OK, _this.recevei_15020.bind(_this));
        return _this;
    }
    /**
     * 发送用户登录请求
     */
    LoginHandler.prototype.send_10001 = function () {
        //发送登录消息
        var msg = new Object();
        msg["msgid"] = NetCode.WSM_C_AUTH;
        msg["sessionid"] = Core.inst.gMe.mSessionid;
        msg["ptuid"] = Core.inst.gMe.mPtuid;
        msg["token"] = Core.inst.gMe.mToken;
        msg["svrid"] = Number(GameConfig.serverid);
        msg["debug"] = Core.inst.gMe.mDebug;
        NetSocket.inst.send(msg);
    };
    /**
     * 接收到服务器返回的登录请求
     */
    LoginHandler.prototype.recevei_10002 = function (msg) {
        var rult = msg['rult'];
        if (rult != 0) {
            var txt = "";
            if (rult == 1)
                txt = " db auth err";
            if (rult == 2)
                txt = " token err";
            if (rult == 3)
                txt = " 需要激活码激活";
            if (rult == 4)
                txt = " 已被封号";
            if (rult == 5)
                txt = " 请5分钟后再上线"; // 延迟登陆
            CUtil.Log("认证失败: " + rult + txt);
        }
    };
    // 登陆成功, 上线收到的第一条消息
    LoginHandler.prototype.recevei_15021 = function (msg) {
        Core.inst.gMe.SetSvrID(msg["svrid"]);
        //   SdkDevelop.instance.reportRoleInfo(2);
        var k = localStorage.getItem("ptuid") + "hirtory";
        localStorage.setItem(k, Core.inst.gMe.SvrID().toString());
    };
    /**
    * 离线奖励消息处理
    * @param msgid 消息号
    * @param msg 消息内容
     */
    LoginHandler.prototype.recevei_15019 = function () {
    };
    LoginHandler.prototype.recevei_15023 = function () {
    };
    /**
     * 上线成功
     */
    LoginHandler.prototype.recevei_15020 = function (msg) {
        CUtil.Log("上线成功");
        Core.inst.layer.openWindowByID(CWindowID.MAIN_WINDOW);
    };
    // 玩家信息
    LoginHandler.prototype.recevei_10010 = function (msg) {
        CUtil.Log("登陆完成，玩家进入游戏");
        Core.inst.gMe.SetCharName(msg["charname"]);
        Core.inst.gMe.SetCharID(msg["charid"]);
        Core.inst.gMe.SetUID(msg["uid"]);
        Core.inst.gMe.SetRoleID(msg["roleid"]);
        Core.inst.gMe.SetSex(msg["sex"]);
        Core.inst.gMe.SetExp(msg["exp"]);
        Core.inst.gMe.SetLevel(msg["lv"]);
        Core.inst.gMe.SetGold(msg["gold"]);
        Core.inst.gMe.SetMoney(msg["money"]);
        Core.inst.gMe.SetMagicStone(msg["magicstone"]);
        Core.inst.gMe.SetPVPGolde(msg["arenamoney"]);
        Core.inst.gMe.SetMainCopyID(msg["maincopyid"]);
        Core.inst.gMe.SetWater(msg["water"]);
        Core.inst.gMe.SetServerTime(msg["tm"]);
        Core.inst.gMe.SetInterval();
        Core.inst.gMe.SetArenaRank(msg["arank"]);
        Core.inst.gMe.SetOpenSvrTime(msg["optm"]);
        Core.inst.gMe.SetVip(msg["viplv"]);
        Core.inst.gMe.SetVipExp(msg["vipexp"]);
        Core.inst.gMe.SetBattle(msg["battle"]);
        Core.inst.gMe.SetInvestNum(msg["invest"]);
        Core.inst.gMe.SetSoul(msg["soul"]);
        Core.inst.gMe.mMasterSkillLv = msg["masterskilllv"];
        // gYsyApkSdk.TellApkUserInfo();
    };
    return LoginHandler;
}(CHandler));
//# sourceMappingURL=LoginHandler.js.map