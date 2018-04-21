/*
* tang 计时器管理;
*/
class CTimerManager
{
    private static $inst:CTimerManager = null;
    private static $open:boolean =false;
    private $timerFunDic:Laya.Dictionary;
    constructor()
    {
       if(false == CTimerManager.$open)
       {
           console.log("错误实例化CTimerManager,请通过CTimerMannager.inst实例化")
       }
       CTimerManager.$inst = this;
       Laya.timer.loop(1000,this,this.timerFunCall);
       this.$timerFunDic = new Laya.Dictionary();
    }

    public static get inst():CTimerManager
    {
       false == CTimerManager.$open && null == CTimerManager.$open ? (CTimerManager.$open = true) && new CTimerManager():0
        return CTimerManager.$inst
    }

    private timerFunCall():void 
    {
        for(let i=0;i < this.$timerFunDic.keys.length;i++)
        {
            let timerInfo = this.$timerFunDic.get(this.$timerFunDic.keys[i]);
            let curTimer:number = new Date().getTime();
            if(curTimer - timerInfo.$curTimer >=timerInfo.$delay)
            {
            if(-1 == timerInfo.$allcount)
            {
               let fun = timerInfo.$fun;
               timerInfo.$curCount+=1
               timerInfo.$curTimer= curTimer;
               fun();
            }
            else
            {
               if(timerInfo.$curCount <timerInfo.$allcount)
               {
               let fun = timerInfo.$fun;
               timerInfo.$curCount+=1
               timerInfo.$curTimer= curTimer;
               fun();
               }  
               else
               {
                this.$timerFunDic.remove(timerInfo.$timerName)
               }
            }
               timerInfo = null;
            }
        }
    }
    /**
     * 添加延时回调
     * @param timerName 计时器名称
     * @param delay 延迟时间
     * @param fun 回调函数
     * @param count 回调次数 -1无限回调
     */
    public addTimerCall(timerName:string,delay:number,fun:any,count=-1):void 
    {
       let timerInfo:any={$timerName:timerName,$delay:delay,$fun:fun,$allcount:count,$curCount:0,$curTimer:new Date().getTime()}
       this.$timerFunDic.set(timerName,timerInfo);
       fun = null;
    }

    /**
     * 移除延时
     * @param timerName 延时名称
     * @param fun 回调函数
     */
    public removeTimerCall(timerName:string,fun:any):void 
    { 
        if(null == this.$timerFunDic.get(timerName))
        return;
        this.$timerFunDic.remove(timerName);
    }

     /**
      * 是否具有某个延时器
      * @param timerName 延时名称
      * @param fun 回调函数
      */
    public hasTimerCall(timerName:string,fun:any):boolean
    {
        if(this.$timerFunDic.get(timerName))
        return true;
        return false;
    }
}