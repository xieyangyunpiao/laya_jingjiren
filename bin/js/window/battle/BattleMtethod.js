/*
* tang 戰鬥方式的封裝;
*/
var BattleMtethod = /** @class */ (function () {
    function BattleMtethod() {
    }
    /**
     * 角色合擊
     */
    BattleMtethod.prototype.RolePunch = function (attackRoleMap, defRoleMap) {
        /*

        Laya.Tween.to(attackRoleMap[0],{x:200,y:150},500,null,null,null,true,true)
        Laya.timer.once(1000,this,function()//播放受击特效
        {
            for(let j = 0; j < defRoleMap.length;j++)
            {
                defRoleMap[j].playGethitAnimation(1,1);
            }

        })
        Laya.Tween.to(attackRoleMap[1],{x:200,y:250},500,null,Laya.Handler.create(this,function()
        {
           attackRoleMap[0].playAttackAnimation("show")
           for(let i = 1;i < attackRoleMap.length;i++)
           {
           attackRoleMap[i].playAttackAnimation("show",function(target:BattleRole)
           {
               for(let  i =0 ;i < attackRoleMap.length;i++)
               {
        
               }

           }, attackRoleMap[i]);
        }
          //角色移动完毕回调
        },null,true))
           
*/
        var ske = Core.inst.resource.getSpineResource("ani/role/1/1.sk").buildArmature(0);
        Laya.stage.addChild(ske);
        ske.x = 100;
        ske.y = 100;
        CUtil.Log(ske.getAniNameByIndex(0));
        ske.play("atk", false);
        ske.on(Laya.Event.LABEL, this, function (totalFrame, e) {
            if (ske.player.currentKeyframeIndex == totalFrame)
                return;
            CUtil.Log("发动攻击:" + e.name + ske.player.currentKeyframeIndex);
        }, [ske.total]);
    };
    /**
     * 角色治療
     */
    BattleMtethod.prototype.RoleAuxiliary = function (attackRole, defRoleMap) {
    };
    /**
     * 一次性物理攻擊
     */
    BattleMtethod.prototype.PhysicsDisposable = function (attackRole, defRoleMap) {
        Laya.Tween.to(attackRole, { x: 0, y: 0 }, 100, Laya.Ease.backOut, Laya.Handler.create(this, roleMoveAnimatonCom));
        function roleMoveAnimatonCom() {
            attackRole.playAttackAnimation("skill");
            attackRole.on(Laya.Event.STOPPED, this, playAttackAnimation);
        }
        function playAttackAnimation() {
            for (var i = 0; i < defRoleMap.length; i++) {
                // defRoleMap[i].play("222",false)
                defRoleMap[i].renderAttrbute(attackRole.roleData.attackData);
                defRoleMap[i].on(Laya.Event.STOPPED, this, playGethitAnimation, [defRoleMap[i]]);
            }
        }
        function playGethitAnimation(role) {
            role.renderAttrbute(attackRole.roleData.attackData);
        }
        CEventManager.inst.dispatchEvent(Core.inst.wndFactory.getWindowByID(CWindowID.BATTLE_WINDOW), BattleEvent.BATTLE_STEP_COM, null);
        attackRole = null;
        defRoleMap = null;
    };
    /**
    * 物理攻擊（分批攻擊）
    */
    BattleMtethod.prototype.PhysicBatches = function (attackRole, defRoleMap) {
    };
    /**
     * 一次性魔法攻擊
     */
    BattleMtethod.prototype.magicDisposable = function (attackRole, defRoleMap) {
        Laya.Tween.to(attackRole, { x: 0, y: 0 }, 100, Laya.Ease.backOut, Laya.Handler.create(this, function () {
            attackRole.playAttackAnimation("222"); //播放攻擊動畫
            attackRole.on(Laya.Event.STOPPED, this, function () {
                for (var i = 0; i < defRoleMap.length; i++) {
                    defRoleMap[i].playGethitAnimation(1, "222");
                    //  defRoleMap[i].renderAttrbute();
                }
                Laya.Tween.to(attackRole, { x: 0, y: 0 }, 100, Laya.Ease.backInOut, Laya.Handler.create(this, function () {
                    CEventManager.inst.dispatchEvent(Core.inst.wndFactory.getWindowByID(CWindowID.BATTLE_WINDOW), BattleEvent.BATTLE_STEP_COM); //拍發本輪戰鬥結束
                })); //返回站立位置
            });
        }));
    };
    /**
     * 魔法攻擊（分批攻擊）
     */
    BattleMtethod.prototype.magicBatches = function (attackRole, defRoleMap) {
    };
    return BattleMtethod;
}());
//# sourceMappingURL=BattleMtethod.js.map