/*
* tang 战斗角色数据;
*/
class BattleRoleData{

    private $bleed:any=100 ;//血量
    private $strength:any ;//能量（用於釋放技能）
    private $defense:any;//防御
    private $attack_def:any;//防御
    private $speed:number=10;//速度(控制出手顺序)
    private $attackBool:number=1;//本回合是否攻击过(1:未攻击 0:已攻击)
    private $defInfo:any;//保存防禦方面的信息
    private $location:any;//角色所站的位置
    private $attackData:any;//技能方面的數據
    private $die:any =1//角色是否死亡(1.未死亡，0死亡)
    private $bufferDic:Laya.Dictionary;//buffer狀態
    private $ID:any;//角色ID
    constructor(data:any)
    {
         this.$bufferDic = new Laya.Dictionary();
         this.$attackData ={};
         this.$ID =data.id;

    }
    public get attackBool():number{return this.$attackBool}
    public set attackBool(value:number){this.$attackBool =value}

    public get speed():number{return this.$speed}
    public set speed(value:number){this.$speed = value}

    public set bleed(value:any){this.$bleed =value};
    public get bleed():any{return this.$bleed};

    public set die(value:any){this.$die =value};
    public get die():any{return this.$die};

    /**
     * 重置角色防禦信息
     */
    public resetRoleDefInfo():BattleRoleData
    {
        return this;
    }
    /**
     * 得到角色防禦信息
     */
    public get defInfo():any
    {
        return this.$defInfo;
    }
   /**
    * 返回角色数据
    */
    public get ID():any
    {
        return this.$ID;
    }
    /**
     * 得到角色所站立的位置
     */
    public get location():any{return this.$location}

    /**
     * 初始化攻擊模式
     */
    public initAttackMode():void 
    {
       this.$attackData["attackType"] =2;//1.普通攻击 2:技能攻击
       this.$attackData["FitHero"]=1;//合体英雄ID
       this.$attackData["DamageType"]=1
    }

    /**
    * 攻擊信息
    */
    public get attackData():any
    {
        return this.$attackData;
    }
}