/*
* tang 战斗逻辑;
*/
var BattleLogic = /** @class */ (function () {
    function BattleLogic() {
    }
    Object.defineProperty(BattleLogic.prototype, "data", {
        set: function (value) {
            this.$roleDataMap = value;
            value = null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 得到逻辑战斗数据
     */
    BattleLogic.prototype.getlogicBattleData = function () {
        if (0 == this.$roleDataMap[0]["length"] || 0 == this.$roleDataMap[1]["length"]) {
            console.log("戰鬥結束");
            CEventManager.inst.dispatchEvent(Core.inst.wndFactory.getWindowByID(CWindowID.BATTLE_WINDOW), BattleEvent.BATTLE_END, null);
            return;
        }
        var attackRoleMap = this.getAttackRole(); //得到攻擊對象
        var defroleMap = this.getDefRole(attackRoleMap[0]); //得到防禦對象
        return [attackRoleMap, defroleMap];
    };
    /**
     * 更新角色數據
     */
    BattleLogic.prototype.updataRoleData = function () {
    };
    /**
    /* 返回当前的主动攻击角色
     */
    BattleLogic.prototype.getAttackRole = function () {
        var attackMap = [];
        return attackMap;
    };
    /**
     * 得到当前被攻击对象（也可能是被辅助对象）
     */
    BattleLogic.prototype.getDefRole = function (attackRole) {
        var defArr = [];
        /*
        if(1 == attackRole.attackData["DamageType"])//攻擊目標陣營
        {

        }
        else //輔助己方陣營
        {

        }
        */
        attackRole = null;
        return defArr;
    };
    /**
     * 结束逻辑运算
     */
    BattleLogic.prototype.logicEnd = function () {
        this.$roleDataMap = null;
    };
    return BattleLogic;
}());
//# sourceMappingURL=BattleLogic.js.map