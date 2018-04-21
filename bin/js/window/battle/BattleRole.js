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
* tang 战斗角色的封装;
*/
var BattleRole = /** @class */ (function (_super) {
    __extends(BattleRole, _super);
    function BattleRole(roleData) {
        var _this = _super.call(this) || this;
        _this.$roleData = roleData;
        _this.$skeleton = CResourceManager.inst.getSpineResource("ani/role/59/59.sk").buildArmature(0);
        _this.$skeleton.scaleX = _this.$skeleton.scaleY = 0.5;
        _this.$skeleton.play("stand", true);
        _this.addChild(_this.$skeleton);
        _this.$bleedSp = new Laya.Sprite();
        _this.$bleedSp.graphics.clear();
        _this.$bleedSp.graphics.drawRect(-50, -120, 100, 10, '#FF00FF');
        _this.addChild(_this.$bleedSp);
        return _this;
    }
    Object.defineProperty(BattleRole.prototype, "startX", {
        get: function () { return this.$startX; },
        set: function (value) { this.$startX = value; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BattleRole.prototype, "startY", {
        get: function () { return this.$startY; },
        set: function (value) { this.$startY = value; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    ;
    /**
     * 重新根据属性进行渲染
     */
    BattleRole.prototype.renderAttrbute = function (attackData) {
    };
    Object.defineProperty(BattleRole.prototype, "roleData", {
        /**
         * 返回角色數據
         */
        get: function () {
            return this.$roleData;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 播放受擊動畫
     * @param type 受擊類型
     * @param hurt 傷害數值
     */
    BattleRole.prototype.playGethitAnimation = function (type, hurt) {
        this.$hurtSkeleton = CResourceManager.inst.getSpineResource("ani/role/60/skeleton.sk").buildArmature(0);
        this.$hurtSkeleton.play(0, false);
        this.$hurtSkeleton.on(Laya.Event.STOPPED, this, function () {
            this.$roleData.bleed -= 100;
            if (0 == this.$roleData.bleed) {
                CUtil.Log("角色死亡");
                this.removeSelf();
            }
            this.$hurtSkeleton.destroy();
            this.$hurtSkeleton.removeSelf();
        });
        this.addChild(this.$hurtSkeleton);
        this.$hurtSkeleton.y = -50;
    };
    /**
     * 播放增益动画
     */
    BattleRole.prototype.playGainProfitAnimation = function () {
    };
    /**
     * 播放反击动画
     */
    BattleRole.prototype.playCounterattackAnimation = function () {
    };
    /**
     * 播放攻擊動畫
     */
    BattleRole.prototype.playAttackAnimation = function (name, comFun, args) {
        if (comFun === void 0) { comFun = null; }
        if (args === void 0) { args = null; }
        this.$skeleton.play(name, false);
        this.$skeleton.on(Laya.Event.STOPPED, this, function (comFun) {
            null != comFun ? comFun(args) : 0;
        }, [comFun]);
    };
    return BattleRole;
}(Laya.Sprite));
//# sourceMappingURL=BattleRole.js.map