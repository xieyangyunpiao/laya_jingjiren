/*
* tang 战斗角色的封装;
*/
class BattleRole extends Laya.Sprite
{
    private $roleData:BattleRoleData;//战斗角色数据
    private $bleedSp:Laya.Sprite;
    private $skeleton:Laya.Skeleton;
    private $hurtSkeleton:Laya.Skeleton;
    private $startX:any;
    private $startY:any;
    
    constructor(roleinfo:BattleRoleData)
    {
      super();
      this.$roleData = roleinfo;
      this.$skeleton = CResourceManager.inst.getSpineResource("ani/role/"+roleinfo.ID+"/"+roleinfo.ID+".sk").buildArmature(0);
      this.$skeleton.scaleX = this.$skeleton.scaleY = 0.5;
      this.$skeleton.play("stand",true)
      this.addChild(this.$skeleton)
      this.$bleedSp = new Laya.Sprite();
      this.$bleedSp.graphics.clear();
      this.$bleedSp.graphics.drawRect(-50,-120,100,10,'#FF00FF')
      this.addChild(this.$bleedSp);
      roleinfo = null;
      
    }

    public set startX(value:any){this.$startX = value};
    public set startY(value:any){this.$startY =value};

    public get startX():any{return this.$startX};
    public get startY():any{return this.$startY};
    
    /**
     * 重新根据属性进行渲染
     */
    public renderAttrbute(attackData:any):void 
    {
    }

    /**
     * 返回角色數據
     */
    public get roleData():BattleRoleData
    {
      return this.$roleData;
    }
    /**
     * 播放受擊動畫
     * @param type 受擊類型 
     * @param hurt 傷害數值
     */
    public playGethitAnimation(type:any,hurt:any):void 
    {

       this.$hurtSkeleton =CResourceManager.inst.getSpineResource("ani/role/"+this.$roleData.ID+"-1/"+this.$roleData.ID+"-1.sk").buildArmature(0);
       this.$hurtSkeleton.play(0,false)
       /*
       this.$hurtSkeleton.on(Laya.Event.STOPPED,this,function()
       {
         
         this.$roleData.bleed-=100;
         if(0 == this.$roleData.bleed)
         {
          CUtil.Log("角色死亡")
          this.removeSelf();
         }
         this.$hurtSkeleton.destroy();
         this.$hurtSkeleton.removeSelf();
        })
      
       this.addChild(this.$hurtSkeleton)
       this.$hurtSkeleton.y =-50
       */
    }
    /**
     * 播放增益动画
     */
    public playGainProfitAnimation():void 
    {

    }
   /**
    * 播放反击动画
    */
    public playCounterattackAnimation():void 
    {

    }
    /**
     * 播放攻擊動畫
     */
    public playAttackAnimation(name:string,comFun:any =null,args:any=null):void 
    {
       this.$skeleton.play(name,false)
       this.$skeleton.on(Laya.Event.STOPPED,this,function(comFun:any)
       {
          null != comFun?comFun(args):0
       },[comFun])
    }
}