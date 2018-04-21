/*
* tang 事件管理;
*/
class CEventManager
{
    private static $inst:CEventManager = null;
    private static $open:boolean = false;
    constructor()
    {
        if(false == CEventManager.$open)
        {
            console.log("错误实例化CEventMannager,请通过CEventManager.inst实例化")
            return ;
        }
        CEventManager.$inst = this;
    }

    public static get inst():CEventManager
    {
        false == CEventManager.$open && null == CEventManager.$inst ? (CEventManager.$open = true) && new CEventManager():0

        return CEventManager.$inst;
    } 
    /**
     * 事件的注册
     */
    public registerEvent(evt:Laya.EventDispatcher,caller:any,type:string,callFun:any):void 
    {
        evt.on(type,caller,callFun)
    }
    /**
     * 具有某个事件
     */
    public hasEvent(evt:Laya.EventDispatcher,type:string):boolean
    {
        return evt.hasListener(type)
    }
    /**
     * 事件的移除
     */
    public removeEven(evt:Laya.EventDispatcher,caller:any,type:string,callFun:any):void 
    {
      evt.off(type,caller,callFun)
    }
    /**
     * 事件的派发
     */
    public dispatchEvent(evt:Laya.EventDispatcher,type:string,data:any=null):void
    {
        evt.event(type,data)
    }
}