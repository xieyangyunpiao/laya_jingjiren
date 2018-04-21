/*
* tang 战斗角色数据;
*/
var BattleRoleData = /** @class */ (function () {
    function BattleRoleData() {
        this.$bleed = 100; //血量
        this.$speed = 10; //速度(控制出手顺序)
        this.$attackBool = 1; //本回合是否攻击过(1:未攻击 0:已攻击)
        this.$die = 1; //角色是否死亡(1.未死亡，0死亡)
        this.$bufferDic = new Laya.Dictionary();
        this.$attackData = {};
    }
    Object.defineProperty(BattleRoleData.prototype, "attackBool", {
        get: function () { return this.$attackBool; },
        set: function (value) { this.$attackBool = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BattleRoleData.prototype, "speed", {
        get: function () { return this.$speed; },
        set: function (value) { this.$speed = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BattleRoleData.prototype, "bleed", {
        get: function () { return this.$bleed; },
        set: function (value) { this.$bleed = value; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(BattleRoleData.prototype, "die", {
        get: function () { return this.$die; },
        set: function (value) { this.$die = value; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    /**
     * 重置角色防禦信息
     */
    BattleRoleData.prototype.resetRoleDefInfo = function () {
        return this;
    };
    Object.defineProperty(BattleRoleData.prototype, "defInfo", {
        /**
         * 得到角色防禦信息
         */
        get: function () {
            return this.$defInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BattleRoleData.prototype, "location", {
        /**
         * 得到角色所站立的位置
         */
        get: function () { return this.$location; },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化攻擊模式
     */
    BattleRoleData.prototype.initAttackMode = function () {
        this.$attackData["attackType"] = 2; //1.普通攻击 2:技能攻击
        this.$attackData["FitHero"] = 1; //合体英雄ID
        this.$attackData["DamageType"] = 1;
    };
    Object.defineProperty(BattleRoleData.prototype, "attackData", {
        /**
        * 攻擊信息
        */
        get: function () {
            return this.$attackData;
        },
        enumerable: true,
        configurable: true
    });
    return BattleRoleData;
}());
//# sourceMappingURL=BattleRoleData.js.map