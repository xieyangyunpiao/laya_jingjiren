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
* tang 战斗界面;
*/
var BattleWindow = /** @class */ (function (_super) {
    __extends(BattleWindow, _super);
    function BattleWindow() {
        var _this = _super.call(this) || this;
        _this.$renderTimer = 100; //渲染时间
        _this.width = GameConfig.STAGE_WIDTH;
        _this.height = GameConfig.STAGE_HEIGHT;
        _this.$battleRoleMap = [[], [], new Laya.Dictionary()];
        _this.$roleContaion = new Laya.Sprite();
        _this.addChild(_this.$roleContaion);
        _this.$roleContaion.width = GameConfig.STAGE_WIDTH;
        _this.$roleContaion.height = GameConfig.STAGE_HEIGHT;
        _this.$roleContaion.x = 100;
        _this.$roleContaion.y = 100;
        _this.$skillContaion = new Laya.Sprite();
        _this.addChild(_this.$skillContaion);
        _this.$aniEffectContaion = new Laya.Sprite();
        _this.addChild(_this.$aniEffectContaion);
        _this.$battleLogic = new BattleLogic();
        _this.$gongList = new Laya.List();
        _this.$gongList.itemRender = BattleLocationItem;
        _this.$gongList.repeatX = 2;
        _this.$gongList.repeatY = 3;
        _this.$gongList.spaceX = 5;
        _this.$gongList.spaceY = 5;
        // this.addChild(this.$gongList);
        _this.$shouList = new Laya.List();
        _this.$shouList.itemRender = BattleLocationItem;
        _this.$shouList.repeatX = 2;
        _this.$shouList.repeatY = 3;
        _this.$shouList.spaceX = 5;
        _this.$shouList.spaceY = 5;
        _this.$shouList.x = 900;
        _this.$battleMethod = new BattleMtethod();
        _this.$modeUrlMap = [];
        return _this;
    }
    Object.defineProperty(BattleWindow.prototype, "data", {
        set: function (value) {
            value = { roleData: [[new BattleRoleData(), new BattleRoleData(), new BattleRoleData(), new BattleRoleData()], [new BattleRoleData(), new BattleRoleData(), new BattleRoleData(), new BattleRoleData()]] };
            this.$battleData = value;
            var arr = [];
            var roleData = value.roleData; //0:自身角色數據 1:地方角色数据
            this.$battleLogic.data = roleData;
            for (var i = 0; i < roleData.length; i++) {
                for (var j = 0; j < roleData[i]["length"]; j++) {
                    var battleRole = new BattleRole(roleData[i][j]);
                    this.$battleRoleMap[i].push(battleRole);
                    this.$battleRoleMap[2].set(roleData[i][j], battleRole);
                    this.$roleContaion.addChild(battleRole);
                    if (i == 1) {
                        battleRole.scaleX = -1;
                    }
                    battleRole.y = j * 100;
                    battleRole.x = i * 800;
                    battleRole.startX = battleRole.x;
                    battleRole.startY = battleRole.y;
                }
            }
            roleData = null;
            value = null;
            //   this.$modeUrlMap.push("ani/role/59/59.sk")
            this.startBattle();
        },
        enumerable: true,
        configurable: true
    });
    BattleWindow.prototype.instanceinit = function () {
        this.$eventMap.push({ target: this, caller: this, type: BattleEvent.BATTLE_START, fun: this.endBattle });
        this.$eventMap.push({ target: this, caller: this, type: BattleEvent.BATTLE_STEP_COM, fun: this.startBattle });
    };
    /**
     * 开始战斗
     */
    BattleWindow.prototype.startBattle = function () {
        var curBattleInfo = this.$battleLogic.getlogicBattleData();
        var attackRoleMap = curBattleInfo[0];
        var defRoleDataMap = curBattleInfo[1];
        var attackRoleModeMap = [];
        var defRoleModeMap = [];
        for (var i = 0; i < attackRoleMap.length; i++)
            attackRoleModeMap.push(this.$battleRoleMap[2].get(attackRoleMap[i]));
        for (var j = 0; j < defRoleDataMap.length; j++)
            defRoleModeMap.push(this.$battleRoleMap[2].get(defRoleDataMap[j]));
        if (attackRoleMap.length > 1) {
            this.$battleMethod.RolePunch(attackRoleModeMap, defRoleModeMap);
        }
        else {
            curBattleInfo[0].updataRoleData(); //進行角色數據的更新
            if (1 == curBattleInfo[0].attackData["DamageType"]) {
                var defroleData = defRoleDataMap.shift();
                var defrole = void 0;
                if (1 == curBattleInfo[0].attackData["Type"]) {
                    if (1 == curBattleInfo[0].attackData["IsTravel"])
                        this.$battleMethod.PhysicBatches(attackRoleModeMap[0], defRoleModeMap);
                    else
                        this.$battleMethod.PhysicsDisposable(attackRoleModeMap[0], defRoleModeMap);
                }
                else {
                    if (1 == curBattleInfo[0].attackData["IsTravel"])
                        this.$battleMethod.magicBatches(attackRoleModeMap[0], defRoleModeMap);
                    else
                        this.$battleMethod.magicDisposable(attackRoleModeMap[0], defRoleModeMap);
                }
            }
            else {
                this.$battleMethod.RoleAuxiliary(null, null);
            }
        }
    };
    /**
     * 结束战斗
     */
    BattleWindow.prototype.endBattle = function () {
        this.$roleContaion.destroyChildren();
        this.$skillContaion.destroyChildren();
        this.$aniEffectContaion.destroyChildren();
        this.$battleLogic.logicEnd();
        for (var i = 0; i < this.$modeUrlMap.length; i++) {
            CResourceManager.inst.deleteResourceByUrl(CLoaderManager.LoaderType_ALTAS, this.$modeUrlMap[i]);
            Laya.loader.clearRes(this.$modeUrlMap[i]);
        }
        this.$battleData = null;
    };
    return BattleWindow;
}(CWindow));
//# sourceMappingURL=BattleWindow.js.map