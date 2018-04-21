// 角色数据类
var CCharacter = /** @class */ (function () {
    ///////////////////////////////////////////////////////////////////////
    // 成员函数
    ///////////////////////////////////////////////////////////////////////
    function CCharacter() {
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
        this.mHero.HeroList = [];
        this.mHero.HeroList.list = [];
        this.mHero.HeroList.PVE = [];
        this.mHero.HeroList.PVP = [];
    }
    // ptuid 去除渠道标志
    CCharacter.prototype.RawPtuid = function () {
        var pos = this.mPtuid.indexOf(".");
        return this.mPtuid.substring(pos + 1);
    };
    CCharacter.prototype.UID = function () { return this.mUID; };
    CCharacter.prototype.SetUID = function (id) { this.mUID = id; };
    CCharacter.prototype.CharID = function () { return this.mCharID; };
    CCharacter.prototype.SetCharID = function (id) { this.mCharID = id; };
    CCharacter.prototype.CharName = function () { return this.mCharName; };
    CCharacter.prototype.SetCharName = function (name) { this.mCharName = name; };
    CCharacter.prototype.Gold = function () { return this.mGold; };
    CCharacter.prototype.SetGold = function (g) { this.mGold = g; };
    CCharacter.prototype.AddGold = function (g) { this.mGold += g; };
    CCharacter.prototype.Money = function () { return this.mMoney; };
    CCharacter.prototype.SetMoney = function (m) { this.mMoney = m; };
    CCharacter.prototype.AddMoney = function (m) { this.mMoney += m; };
    CCharacter.prototype.Sex = function () { return this.mSex; };
    CCharacter.prototype.SetSex = function (s) { this.mSex = s; };
    CCharacter.prototype.RoleID = function () { return this.mRoleID; };
    CCharacter.prototype.SetRoleID = function (id) { this.mRoleID = id; };
    CCharacter.prototype.Level = function () { return this.mLv; };
    CCharacter.prototype.SetLevel = function (lv) {
        if (this.mLv < lv) {
        }
        this.mLv = lv;
        if (lv > 200)
            return;
    };
    CCharacter.prototype.Vip = function () { return this.mVip; };
    CCharacter.prototype.SetVip = function (vip) {
        this.mVip = vip;
    };
    CCharacter.prototype.MaxExp = function () { return this.mMaxExp; };
    CCharacter.prototype.SvrID = function () { return this.mSvrID; };
    CCharacter.prototype.SetSvrID = function (id) { this.mSvrID = id; };
    // 经验
    CCharacter.prototype.Exp = function () { return this.mExp; };
    CCharacter.prototype.SetExp = function (e) { this.mExp = e; };
    CCharacter.prototype.AddExp = function (add) {
    };
    // main copy id
    CCharacter.prototype.MainCopyID = function () { return this.mMainCopyID; };
    CCharacter.prototype.SetMainCopyID = function (id) {
    };
    // hero 
    CCharacter.prototype.GetHero = function (heroid) {
        for (var i = 0; i < this.mHeroList.length; i++) {
            var h = this.mHeroList[i];
            if (h.heroid == heroid)
                return h;
        }
        return null;
    };
    CCharacter.prototype.GetHeroSkillLevel = function (h, skid) {
        for (var i = 0; i < h.hero_skill.length; i++) {
            var sk = h.hero_skill[i];
            if (sk.skillid == skid)
                return sk.skilllv;
        }
        return 0;
    };
    CCharacter.prototype.PVPGold = function () {
        return this.mPVPGold;
    };
    CCharacter.prototype.SetPVPGolde = function (num) {
        this.mPVPGold = num;
    };
    CCharacter.prototype.GetMagicStone = function () {
        return this.mMagicStone;
    };
    CCharacter.prototype.SetMagicStone = function (num) {
        this.mMagicStone = num;
    };
    CCharacter.prototype.GetEmNum = function () {
        var num = 0;
        for (var i in this.mPVELineup) {
            if (this.mPVELineup[i] > 0)
                num++;
        }
        return num;
    };
    CCharacter.prototype.SetWater = function (water) {
        this.mWater = water;
    };
    CCharacter.prototype.GetWater = function () {
        return this.mWater;
    };
    CCharacter.prototype.SetServerTime = function (time) {
        this.mServerTime = time;
    };
    CCharacter.prototype.GetSeverTime = function () {
        return this.mServerTime;
    };
    CCharacter.prototype.SetInterval = function () {
        var time = this.mServerTime - Math.floor(new Date().getTime() / 1000);
        this.mIntervel = time;
    };
    CCharacter.prototype.GetInterval = function () {
        return this.mIntervel;
    };
    CCharacter.prototype.SetBattle = function (battle) { this.mBattle = battle; };
    CCharacter.prototype.GetBattle = function () { return this.mBattle; };
    CCharacter.prototype.SetArenaRank = function (rank) {
        this.mArenaRank = rank;
    };
    CCharacter.prototype.GetArenaRank = function () {
        return this.mArenaRank;
    };
    CCharacter.prototype.VipExp = function () { return this.mVipExp; };
    CCharacter.prototype.SetVipExp = function (exp) { this.mVipExp = exp; };
    CCharacter.prototype.SetOpenSvrTime = function (time) {
    };
    CCharacter.prototype.PayCounts = function () { return this.mPayCounts; };
    ;
    CCharacter.prototype.SetPayCounts = function (counts) { this.mPayCounts = counts; };
    CCharacter.prototype.PayPrice = function () { return this.mPayPrice; };
    ;
    CCharacter.prototype.SetPayPrice = function (counts) { this.mPayPrice = counts; };
    CCharacter.prototype.GetOpenSvrTime = function () {
        return this.mOpenSvrTime;
    };
    CCharacter.prototype.SetInvestNum = function (num) { this.mInvestNum = num; };
    CCharacter.prototype.GetInvestNum = function () {
        return this.mInvestNum;
    };
    CCharacter.prototype.SetSoul = function (num) { this.mSoul = num; };
    CCharacter.prototype.Soul = function () { return this.mSoul; };
    return CCharacter;
}());
//# sourceMappingURL=CCharacter.js.map