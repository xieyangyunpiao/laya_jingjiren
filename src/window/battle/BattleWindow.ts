/*
* tang 战斗界面;
*/
class BattleWindow extends CWindow
{

    private $battleLogic:BattleLogic;//战斗逻辑
    private $chatContent:Array<any>;//彈幕内容
    private $battleData:any ;//战斗数据
    private $battleRoleMap:Array<any>;//战斗角色映射表 0:自身角色 1:敌方角色
    private $roleContaion:Laya.Sprite;//角色容器;
    private $skillContaion:Laya.Sprite;//技能容器;
    private $aniEffectContaion:Laya.Sprite;//动画特效容器;
    private $renderTimer:any = 100;//渲染时间
    private $gongList:Laya.List;//攻方List;
    private $shouList:Laya.List;//守方List
    private $battleMethod:BattleMtethod;//戰鬥方式
    private $battleBack:Laya.Image;//戰鬥背景
    private $modeUrlMap:Array<any>;
    constructor()
    {
       super();
       this.width = GameConfig.STAGE_WIDTH;
       this.height  = GameConfig.STAGE_HEIGHT;
       this.$battleRoleMap=[[],[],new Laya.Dictionary()];
       this.$roleContaion = new Laya.Sprite();
       this.addChild(this.$roleContaion);
       this.$roleContaion.width = GameConfig.STAGE_WIDTH;
       this.$roleContaion.height = GameConfig.STAGE_HEIGHT;
       this.$roleContaion.x = 100;
       this.$roleContaion.y = 100;
       this.$skillContaion = new Laya.Sprite();
       this.addChild(this.$skillContaion);
       this.$aniEffectContaion = new Laya.Sprite();
       this.addChild(this.$aniEffectContaion);
       this.$battleLogic = new BattleLogic();
       this.$gongList = new Laya.List();
       this.$gongList.itemRender = BattleLocationItem;
       this.$gongList.repeatX = 2;
       this.$gongList.repeatY = 3;
       this.$gongList.spaceX = 5;
       this.$gongList.spaceY = 5;
      // this.addChild(this.$gongList);
       this.$shouList = new Laya.List();
       this.$shouList.itemRender = BattleLocationItem;
       this.$shouList.repeatX  =2;
       this.$shouList.repeatY = 3;
       this.$shouList.spaceX = 5;
       this.$shouList.spaceY = 5;
       this.$shouList.x = 900;
       this.$battleMethod = new BattleMtethod();
       this.$modeUrlMap=[];
    }

    public set data(value:any)
    {
        value = {roleData:[[new BattleRoleData({id:59}),new BattleRoleData({id:60}),new BattleRoleData({id:59}),new BattleRoleData({id:59})],[new BattleRoleData({id:60}),new BattleRoleData({id:60}),new BattleRoleData({id:60}),new BattleRoleData({id:60})]]}
        this.$battleData = value;
        let arr:Array<any>=[];
        let roleData:Array<BattleRoleData>=value.roleData; //0:自身角色數據 1:地方角色数据
        this.$battleLogic.data = roleData;
        for(let i =0;i < roleData.length;i++)
        {
            for(let j = 0;j < roleData[i]["length"];j++)
            {
               let battleRole:BattleRole = new BattleRole(roleData[i][j]);
               this.$battleRoleMap[i].push(battleRole);
               this.$battleRoleMap[2].set(roleData[i][j],battleRole);
               this.$roleContaion.addChild(battleRole);
               if(i == 1)
               {
                   battleRole.scaleX = -1;
               }
               battleRole.y = j * 100;
               battleRole.x = i * 600;
               battleRole.startX = battleRole.x;
               battleRole.startY = battleRole.y;
            }
        }
        roleData =null;
        value = null;
        
     //   this.$modeUrlMap.push("ani/role/59/59.sk")
    
        this.startBattle();
    }
    protected instanceinit()
    {
    this.$eventMap.push({target:this,caller:this,type:BattleEvent.BATTLE_START,fun:this.endBattle});
    this.$eventMap.push({target:this,caller:this,type:BattleEvent.BATTLE_STEP_COM,fun:this.startBattle});
    }
    /**
     * 开始战斗
     */
    private startBattle()
    {
        this.$battleMethod.RolePunch([this.$battleRoleMap[0][0],this.$battleRoleMap[0][1]],[this.$battleRoleMap[1][0]]);
        /*
       let curBattleInfo:Array<any>= this.$battleLogic.getlogicBattleData();
       let attackRoleMap:Array<BattleRoleData> = curBattleInfo[0];
       let defRoleDataMap:Array<BattleRoleData> = curBattleInfo[1];
       let attackRoleModeMap:Array<BattleRole>=[];
       let defRoleModeMap:Array<BattleRole>=[];
       for(let i = 0;i < attackRoleMap.length;i++)
       attackRoleModeMap.push(this.$battleRoleMap[2].get(attackRoleMap[i]));
       for(let j =0; j < defRoleDataMap.length;j++)
       defRoleModeMap.push(this.$battleRoleMap[2].get(defRoleDataMap[j]));    
       if(attackRoleMap.length > 1 ) //如果是合體技能
       {
         this.$battleMethod.RolePunch(attackRoleModeMap,defRoleModeMap);
       }
       else
       {
           curBattleInfo[0].updataRoleData();//進行角色數據的更新
           if(1 == curBattleInfo[0].attackData["DamageType"])//普通攻擊
           {
               let defroleData:BattleRoleData = defRoleDataMap.shift();
               let defrole:BattleRole;
               if(1 == curBattleInfo[0].attackData["Type"])//物理攻擊
            {
               if(1 == curBattleInfo[0].attackData["IsTravel"]) //遍歷打
                this.$battleMethod.PhysicBatches( attackRoleModeMap[0],defRoleModeMap);
               else //一次性
                this.$battleMethod.PhysicsDisposable( attackRoleModeMap[0],defRoleModeMap);
            }
            else //法術攻擊
            {
               if(1 == curBattleInfo[0].attackData["IsTravel"]) //遍歷打
               this.$battleMethod.magicBatches( attackRoleModeMap[0],defRoleModeMap);
               else //一次性
               this.$battleMethod.magicDisposable(attackRoleModeMap[0],defRoleModeMap);
            }

           }
           else //如果是輔助
           {
               this.$battleMethod.RoleAuxiliary(null,null);
           }

       }
       */
    }
    /**
     * 结束战斗
     */
    private endBattle()
    {
        this.$roleContaion.destroyChildren();
        this.$skillContaion.destroyChildren();
        this.$aniEffectContaion.destroyChildren();
        this.$battleLogic.logicEnd();
        for(let i =0;i < this.$modeUrlMap.length;i++)
        {
        CResourceManager.inst.deleteResourceByUrl(CLoaderManager.LoaderType_ALTAS,this.$modeUrlMap[i])
        Laya.loader.clearRes(this.$modeUrlMap[i])
        }
        this.$battleData = null;
    }

    

    
}