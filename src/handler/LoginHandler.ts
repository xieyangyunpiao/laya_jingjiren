/*
* name;
*/
class LoginHandler extends CHandler
{
    constructor()
    {
       super();
       CHandler.msgHandler.set(NetCode.WSM_S_AUTH_RULT,this.recevei_10002.bind(this))
       CHandler.msgHandler.set(NetCode.WSM_S_LOGIN_OK,this.recevei_15021.bind(this))
       CHandler.msgHandler.set(NetCode.WSM_S_OFFLINE_PROFIT_INFO,this.recevei_15019.bind(this));
       CHandler.msgHandler.set(NetCode.WSM_S_Drop,this.recevei_15023.bind(this));
       CHandler.msgHandler.set(NetCode.WSM_S_ONLINE_INFO,this.recevei_10010.bind(this));
       CHandler.msgHandler.set(NetCode.WSM_S_ONLINE_OK,this.recevei_15020.bind(this));
       CHandler.msgHandler.set(NetCode.WSM_S_CLOSE_AGENT,this.recevei_10006.bind(this));
    }


    private 
    /**
     * 发送用户登录请求
     */
    public send_10001()
    {
        //发送登录消息
        let msg = new Object();
        msg["msgid"] = NetCode.WSM_C_AUTH;
        msg["sessionid"] =Core.inst.gMe.mSessionid;
        msg["ptuid"] = Core.inst.gMe.mPtuid;
        msg["token"] = Core.inst.gMe.mToken;
        msg["svrid"] = Number(GameConfig.serverid);
        msg["debug"] = Core.inst.gMe.mDebug;
        NetSocket.inst.send(msg);
    }
    /**
     * 断开连接调度
     */
    private recevei_10006(msg:any):void 
    {

    }
   /**
    * 接收到服务器返回的登录请求
    */
   private  recevei_10002(msg:any)
    {
        let rult = msg['rult'];
    if (rult != 0) 
    {
        let txt = "";
        if(rult == 1) txt = " db auth err";
        if(rult == 2) txt = " token err";
        if(rult == 3) txt = " 需要激活码激活";
        if(rult == 4) txt = " 已被封号";
        if(rult == 5) txt = " 请5分钟后再上线";  // 延迟登陆


        CUtil.Log("认证失败: " + rult + txt);
    }
    }
// 登陆成功, 上线收到的第一条消息
   private recevei_15021(msg: any) 
  {
    Core.inst.gMe.SetSvrID(msg["svrid"]);
 //   SdkDevelop.instance.reportRoleInfo(2);
    let k = localStorage.getItem("ptuid") + "hirtory";
    localStorage.setItem(k , Core.inst.gMe.SvrID().toString())
  }
/**
* 离线奖励消息处理
* @param msgid 消息号
* @param msg 消息内容
 */
  private recevei_15019():void 
  {

  }

  private recevei_15023():void 
  {

  }
/**
 * 上线成功
 */
  private recevei_15020(msg:any):void 
  {

      CUtil.Log("上线成功")
      Core.inst.layer.openWindowByID(CWindowID.MAIN_WINDOW)
  }
  
// 玩家信息
private recevei_10010(msg:any) 
{
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
    Core.inst.gMe.SetMagicStone(msg["magicstone"])
    Core.inst.gMe.SetPVPGolde(msg["arenamoney"]);
    Core.inst.gMe.SetMainCopyID(msg["maincopyid"]);
    Core.inst.gMe.SetWater(msg["water"]);
    Core.inst.gMe.SetServerTime(msg["tm"]);
    Core.inst.gMe.SetInterval();
    Core.inst.gMe.SetArenaRank(msg["arank"]);
    Core.inst.gMe.SetOpenSvrTime(msg["optm"]);
    Core.inst.gMe.SetVip(msg["viplv"])
    Core.inst.gMe.SetVipExp(msg["vipexp"])
    Core.inst.gMe.SetBattle(msg["battle"])
    Core.inst. gMe.SetInvestNum(msg["invest"])
    Core.inst.gMe.SetSoul(msg["soul"])
    Core.inst.gMe.mMasterSkillLv = msg["masterskilllv"];
   // gYsyApkSdk.TellApkUserInfo();
}

    
}