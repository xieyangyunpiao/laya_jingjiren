/*
* name;
*/
var RoleMessage = /** @class */ (function () {
    function RoleMessage() {
        // 登陆数据
        this.mPtuid = ""; // 渠道.第三方平台账号id // 注意：这个是加了渠道标志的，如果不需要渠道标志请调用RawPtuid()
        this.mSessionid = 0;
        this.mToken = "";
        this.mDebug = 0; // 是否开发测试  
        this.mIsActive = 1; // 用于激活码玩家, 0:未激活 1:已激活
        this.mPtExt = ""; // 第三方扩展信息
        this.mSoEasySdkIndex = ""; // 速易sdk的渠道index
        this.mSoEasySubscribe = {
            showQRCodeMethod: false,
            isSubscribe: false
        }; // 速易sdk的渠道是否存在关注二维码方法和关注状态true/false
        // 玩家数据
        this.mUID = 0; // user ID
        this.mCharID = "0"; // 角色ID, 字符串数字
        this.mCharName = ""; // 角色名
        this.mLv = 1; // 玩家等级
        this.mExp = 0; // 玩家经验
        this.mMaxExp = 0; // 最大经验值
        this.mGold = 0; // 金币
        this.mMoney = 0; // 钻石
        this.mSex = 0; // 性别
        this.mRoleID = 16; // 头像
        this.mVip = 0; // vip等级
        this.mVipExp = 0; //vip经验
        this.mVipMaxExp = 0; //vip最大经验
        this.mPVPGold = 0; //竞技场币
        this.mMagicStone = 0; //红宝石
        this.mWater = 0; //果汁（领地）
        this.mServerTime = 0; //服务器时间
        this.mIntervel = 0; //服务器时间与本地时间差值
        this.mPayCounts = 0; //累积充值
        this.mPayPrice = 0; // 累积重置人民币
        this.mOpenSvrTime = 0; //开服时间
        this.mSoul = 0; //魂石
        this.mArenaRank = 0; //竞技场排名
        this.mSvrID = 0; // 实际服ID
        this.mMainCopyID = 0; // 主线关卡id
        this.mBag = []; // 背包数据
        this.mHero = {}; // 英雄数据
        this.mBattle = 0;
        this.mMasterSkillLv = {}; // 主公技能等级 
        this.mPVPLineup = []; // pvp 布阵数据
        this.mPVELineup = []; // pve 布阵数据
        this.mHeroList = []; // 英雄列表
        this.mInvestNum = 0; //成长基金购买人数
        this.mRefreshdata = {};
        this.mDyAryData = {}; // 动态数组 179        
    }
    // ptuid 去除渠道标志
    RoleMessage.prototype.RawPtuid = function () {
        var pos = this.mPtuid.indexOf(".");
        return this.mPtuid.substring(pos + 1);
    };
    RoleMessage.prototype.UID = function () { return this.mUID; };
    RoleMessage.prototype.SetUID = function (id) { this.mUID = id; };
    RoleMessage.prototype.CharID = function () { return this.mCharID; };
    RoleMessage.prototype.SetCharID = function (id) { this.mCharID = id; };
    RoleMessage.prototype.CharName = function () { return this.mCharName; };
    RoleMessage.prototype.SetCharName = function (name) { this.mCharName = name; };
    RoleMessage.prototype.Gold = function () { return this.mGold; };
    RoleMessage.prototype.SetGold = function (g) { this.mGold = g; };
    RoleMessage.prototype.AddGold = function (g) { this.mGold += g; };
    RoleMessage.prototype.Money = function () { return this.mMoney; };
    RoleMessage.prototype.SetMoney = function (m) { this.mMoney = m; };
    RoleMessage.prototype.AddMoney = function (m) { this.mMoney += m; };
    RoleMessage.prototype.Sex = function () { return this.mSex; };
    RoleMessage.prototype.SetSex = function (s) { this.mSex = s; };
    RoleMessage.prototype.RoleID = function () { return this.mRoleID; };
    RoleMessage.prototype.SetRoleID = function (id) { this.mRoleID = id; };
    RoleMessage.prototype.Level = function () { return this.mLv; };
    RoleMessage.prototype.SetLevel = function (lv) {
        this.mLv = lv;
        if (lv > 200)
            return;
        var cfg;
        this.mMaxExp = cfg.Exp;
    };
    RoleMessage.prototype.Vip = function () { return this.mVip; };
    RoleMessage.prototype.SetVip = function (vip) {
        this.mVip = vip;
    };
    RoleMessage.prototype.MaxExp = function () { return this.mMaxExp; };
    RoleMessage.prototype.SvrID = function () { return this.mSvrID; };
    RoleMessage.prototype.SetSvrID = function (id) { this.mSvrID = id; };
    // 经验
    RoleMessage.prototype.Exp = function () { return this.mExp; };
    RoleMessage.prototype.SetExp = function (e) { this.mExp = e; };
    RoleMessage.prototype.AddExp = function (add) {
        while (add > 0) {
            if (this.mLv > 200)
                return;
            var cfg = void 0;
            var maxExp = cfg.Exp;
            var need = maxExp - this.mExp;
            if (need <= 0)
                return;
            if (add >= need) {
                this.SetLevel(this.mLv + 1);
                this.mExp = 0;
                add -= need;
            }
            else {
                this.mExp += add;
                add = 0;
            }
        }
    };
    // main copy id
    RoleMessage.prototype.MainCopyID = function () { return this.mMainCopyID; };
    RoleMessage.prototype.SetMainCopyID = function (id) {
        var maxcopy;
        if (maxcopy >= id) {
            this.mMainCopyID = id;
        }
        else {
            this.mMainCopyID = (maxcopy - 1);
        }
    };
    // hero 
    RoleMessage.prototype.GetHero = function (heroid) {
        for (var i = 0; i < this.mHeroList.length; i++) {
            var h = this.mHeroList[i];
            if (h.heroid == heroid)
                return h;
        }
        return null;
    };
    RoleMessage.prototype.GetHeroSkillLevel = function (h, skid) {
        for (var i = 0; i < h.hero_skill.length; i++) {
            var sk = h.hero_skill[i];
            if (sk.skillid == skid)
                return sk.skilllv;
        }
        return 0;
    };
    RoleMessage.prototype.PVPGold = function () {
        return this.mPVPGold;
    };
    RoleMessage.prototype.SetPVPGolde = function (num) {
        this.mPVPGold = num;
    };
    RoleMessage.prototype.GetMagicStone = function () {
        return this.mMagicStone;
    };
    RoleMessage.prototype.SetMagicStone = function (num) {
        this.mMagicStone = num;
    };
    RoleMessage.prototype.GetEmNum = function () {
        var num = 0;
        for (var i in this.mPVELineup) {
            if (this.mPVELineup[i] > 0)
                num++;
        }
        return num;
    };
    RoleMessage.prototype.SetWater = function (water) {
        this.mWater = water;
    };
    RoleMessage.prototype.GetWater = function () {
        return this.mWater;
    };
    RoleMessage.prototype.SetServerTime = function (time) {
        this.mServerTime = time;
    };
    RoleMessage.prototype.GetSeverTime = function () {
        return this.mServerTime;
    };
    RoleMessage.prototype.SetInterval = function () {
        var time = this.mServerTime - Math.floor(new Date().getTime() / 1000);
        this.mIntervel = time;
    };
    RoleMessage.prototype.GetInterval = function () {
        return this.mIntervel;
    };
    RoleMessage.prototype.SetBattle = function (battle) { this.mBattle = battle; };
    RoleMessage.prototype.GetBattle = function () { return this.mBattle; };
    RoleMessage.prototype.SetArenaRank = function (rank) {
        this.mArenaRank = rank;
    };
    RoleMessage.prototype.GetArenaRank = function () {
        return this.mArenaRank;
    };
    RoleMessage.prototype.VipExp = function () { return this.mVipExp; };
    RoleMessage.prototype.SetVipExp = function (exp) { this.mVipExp = exp; };
    RoleMessage.prototype.SetOpenSvrTime = function (time) {
        this.mOpenSvrTime = time;
    };
    RoleMessage.prototype.PayCounts = function () { return this.mPayCounts; };
    ;
    RoleMessage.prototype.SetPayCounts = function (counts) { this.mPayCounts = counts; };
    RoleMessage.prototype.PayPrice = function () { return this.mPayPrice; };
    ;
    RoleMessage.prototype.SetPayPrice = function (counts) { this.mPayPrice = counts; };
    RoleMessage.prototype.GetOpenSvrTime = function () {
        return this.mOpenSvrTime;
    };
    RoleMessage.prototype.SetInvestNum = function (num) { this.mInvestNum = num; };
    RoleMessage.prototype.GetInvestNum = function () {
        return this.mInvestNum;
    };
    RoleMessage.prototype.SetSoul = function (num) { this.mSoul = num; };
    RoleMessage.prototype.Soul = function () { return this.mSoul; };
    return RoleMessage;
}());
//# sourceMappingURL=RoleMessage.js.map