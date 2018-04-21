/*
* tang 战斗逻辑;
*/
class BattleLogic
{
    private $roleDataMap:Array<BattleRoleData>
    constructor()
    {

    }
    public set data(value:any)
    {
       this.$roleDataMap=value
       value = null;
    }

    /**
     * 得到逻辑战斗数据
     */
    public getlogicBattleData():any 
    {
       if(0 == this.$roleDataMap[0]["length"] || 0==this.$roleDataMap[1]["length"] )
       {
           console.log("戰鬥結束")
           CEventManager.inst.dispatchEvent(Core.inst.wndFactory.getWindowByID(CWindowID.BATTLE_WINDOW),BattleEvent.BATTLE_END,null)
           return ;
       }
       let attackRoleMap:Array<BattleRoleData> =this.getAttackRole()//得到攻擊對象
       let defroleMap:Array<BattleRoleData>=this.getDefRole(attackRoleMap[0]);//得到防禦對象
       return [attackRoleMap,defroleMap];
    }
   /**
    * 更新角色數據
    */
    public updataRoleData()
    {

    }
    /**
    /* 返回当前的主动攻击角色
     */
    private getAttackRole():Array<BattleRoleData>
    {
        let attackMap:Array<BattleRoleData>=[];
        return attackMap;
    }
    /**
     * 得到当前被攻击对象（也可能是被辅助对象）
     */
    private getDefRole(attackRole:BattleRoleData):Array<BattleRoleData>
    {
        let defArr:Array<BattleRoleData>=[];
        /*
        if(1 == attackRole.attackData["DamageType"])//攻擊目標陣營
        {

        }
        else //輔助己方陣營
        {

        }
        */
        attackRole = null;
        return  defArr;
    }
    /**
     * 结束逻辑运算
     */
    public logicEnd():void 
    {
      this.$roleDataMap = null;
    }
}