/*
* name;
*/
class RoleMessage{

     // 登陆数据
    public mPtuid: string        = "";     // 渠道.第三方平台账号id // 注意：这个是加了渠道标志的，如果不需要渠道标志请调用RawPtuid()
    public mSessionid: number    = 0;
    public mToken: string        = "";
    public mDebug: number        = 0;      // 是否开发测试  
    public mIsActive:number      = 1;      // 用于激活码玩家, 0:未激活 1:已激活
    public mPtExt:any            = "";     // 第三方扩展信息
    public mSoEasySdkIndex:string = "";    // 速易sdk的渠道index
    public mSoEasySubscribe:any  = {
        showQRCodeMethod: false, // true/false
        isSubscribe: false
    };     // 速易sdk的渠道是否存在关注二维码方法和关注状态true/false

    // 玩家数据
    private mUID: number         = 0;      // user ID
    private mCharID: string      = "0";    // 角色ID, 字符串数字
    private mCharName: string    = "";     // 角色名
    private mLv: number          = 1;      // 玩家等级
    private mExp: number         = 0;      // 玩家经验
    private mMaxExp: number      = 0;      // 最大经验值
    private mGold: number        = 0;      // 金币
    private mMoney: number       = 0;      // 钻石
    private mSex: number         = 0;      // 性别
    private mRoleID: number      = 16;      // 头像
    private mVip   :number       = 0;      // vip等级
    private mVipExp : number     = 0;      //vip经验
    private mVipMaxExp : number  = 0;       //vip最大经验
    private mPVPGold : number    = 0;       //竞技场币
    private mMagicStone : number = 0;       //红宝石
    private mWater:number        = 0;       //果汁（领地）
    private mServerTime:number   = 0;       //服务器时间
    private mIntervel:number     = 0;       //服务器时间与本地时间差值
    private mPayCounts: number   = 0;       //累积充值
    private mPayPrice : number   = 0;       // 累积重置人民币
    private mOpenSvrTime:number  = 0;       //开服时间
    private mSoul    : number    = 0;       //魂石

    private mArenaRank:number    = 0;       //竞技场排名

    private mSvrID:number        = 0;    // 实际服ID
    private mMainCopyID: number  = 0;    // 主线关卡id

    public mBag: any            = [];        // 背包数据
    public mHero: any           = {};        // 英雄数据
    private mBattle :number     = 0;

    public mMasterSkillLv: any  = {};    // 主公技能等级 

    public mPVPLineup        = [];      // pvp 布阵数据
    public mPVELineup        = [];      // pve 布阵数据
    public mHeroList         = [];      // 英雄列表

    public mInvestNum        = 0;        //成长基金购买人数


    public mRefreshdata:any    = {};
    public mDyAryData : any    = {};       // 动态数组 179        

    constructor()
    {

    }

     // ptuid 去除渠道标志
    public RawPtuid():string 
    {
        let pos = this.mPtuid.indexOf(".");
        return this.mPtuid.substring(pos+1);
    }

    public UID(): number { return this.mUID; }
    public SetUID(id: number) { this.mUID = id; }

    public CharID(): string { return this.mCharID; }
    public SetCharID(id: string) { this.mCharID = id; }


    public CharName(): string { return this.mCharName; }
    public SetCharName(name: string) { this.mCharName = name; }


    public Gold(): number { return this.mGold; }
    public SetGold(g: number) { this.mGold = g; }
    public AddGold(g: number) { this.mGold += g; }


    public Money(): number { return this.mMoney; }
    public SetMoney(m: number) { this.mMoney = m; }
    public AddMoney(m: number) { this.mMoney += m; }


    public Sex(): number { return this.mSex; }
    public SetSex(s: number) { this.mSex = s; }


    public RoleID(): number { return this.mRoleID; }
    public SetRoleID(id: number) { this.mRoleID = id; }


    public Level(): number { return this.mLv; }
    public SetLevel(lv: number) {
        this.mLv = lv;
        if(lv > 200) return
        let cfg;
        this.mMaxExp = cfg.Exp;
    }

    public Vip():number {return this.mVip}
    public SetVip(vip : number ) { 
        this.mVip = vip
    }

    public MaxExp() { return this.mMaxExp; }

    public SvrID(): number { return this.mSvrID; }
    public SetSvrID(id: number) { this.mSvrID = id; }

    // 经验
    public Exp(): number { return this.mExp; }
    public SetExp(e: number) { this.mExp = e; }
    public AddExp(add: number) {
        while (add > 0) {
            if(this.mLv > 200) return
            let cfg ;
            let maxExp = cfg.Exp;
            let need = maxExp - this.mExp;
            if (need <= 0) return;
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
    }

    // main copy id
    public MainCopyID(): number { return this.mMainCopyID; }
    public SetMainCopyID(id: number) { 
        let maxcopy; 
        if(maxcopy >= id)
        {
            this.mMainCopyID = id; 
        }else
        {
            this.mMainCopyID = (maxcopy - 1 )
        }
        
    }

    // hero 
    public GetHero(heroid: number): any {
        for (let i = 0; i < this.mHeroList.length; i++) {
            let h = this.mHeroList[i];
            if (h.heroid == heroid) return h;
        }

        return null;
    }

    public GetHeroSkillLevel(h: any, skid: number) {
        for (let i = 0; i < h.hero_skill.length; i++) {
            let sk = h.hero_skill[i];
            if (sk.skillid == skid) return sk.skilllv;
        }

        return 0;
    }

    public PVPGold():number
    {
        return this.mPVPGold;
    }

    public SetPVPGolde(num):void
    {
        this.mPVPGold = num
    }

    public GetMagicStone():number
    {
        return this.mMagicStone;
    }

    public SetMagicStone(num):void
    {
        this.mMagicStone = num
    }
    public GetEmNum():number
    {
        let num = 0;
        for (let i in this.mPVELineup) {
            if (this.mPVELineup[i] > 0) num++
        }
        return num
    }

    public SetWater(water:number):void{
        this.mWater = water;
    }
    public GetWater():number{
        return this.mWater;
    }

    public SetServerTime(time:number):void{
        this.mServerTime = time;
    }
    public GetSeverTime():number{
        return this.mServerTime;
    }

    public SetInterval():void{
        let time = this.mServerTime - Math.floor(new Date().getTime()/1000);
        this.mIntervel = time;
    }
    public GetInterval():number{
        return this.mIntervel;
    }

    public SetBattle(battle : number):void{ this.mBattle = battle; }
    public GetBattle():number{return this.mBattle}

    public SetArenaRank(rank:number):void{
        this.mArenaRank = rank;
    }
    public GetArenaRank():number{
        return this.mArenaRank;
    }
    public VipExp():number {return this.mVipExp}
    public SetVipExp(exp):void{this.mVipExp = exp}
    public SetOpenSvrTime(time:number):void
    {
        this.mOpenSvrTime = time;
    }

    public PayCounts():number {return this.mPayCounts};
    public SetPayCounts(counts):void {this.mPayCounts = counts}

    public PayPrice():number {return this.mPayPrice};
    public SetPayPrice(counts):void {this.mPayPrice = counts}
    public GetOpenSvrTime():number{
        return this.mOpenSvrTime;
    }

    public SetInvestNum(num):void {this.mInvestNum = num}
    public GetInvestNum():number{
        return this.mInvestNum;
    }

    public SetSoul(num):void{this.mSoul = num}
    public Soul():any{return this.mSoul}
}