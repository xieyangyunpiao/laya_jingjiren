/*
* tang 對象池的封裝;
*/
class PoolManager{
    
    private $poolDic:Laya.Dictionary;//池映射表
    private static $inst:PoolManager=null;//對该实例的唯一引用
    private static $open:boolean=false//控制该类的对外开放
    constructor()
    {

       if(false == PoolManager.$open)
       {
           throw Error("\n调用PoolManager方式异常,请通过PoolManager.inst方式调用")
       }
       this.$poolDic = new Laya.Dictionary();
       PoolManager.$inst = this;
    }

    public static get inst():PoolManager
    {
        null == PoolManager.$inst && false == PoolManager.$open ?(PoolManager.$open = true) && new PoolManager():0;
        return PoolManager.$inst;
    }
    /**
     * 通过类名获得对象
     */
    public getObjectByClassName(name:string):any
    {
        if(false == this.hasObjectByCalssName(name))
        this.createObject(name);
        let poolMap:Array<any>=this.$poolDic.get(name);
        return poolMap.shift();
    }
      
    private createObject(name:string):void 
    {
       if(false == this.hasObjectByCalssName(name))
        this.$poolDic.set(name,[]);
        let objectMap:Array<any> = this.$poolDic.get(name);
        objectMap.push(new window[name])
    }
    /**
     * 通过类名判断是否具有某个对象的池
     */
    private hasObjectByCalssName(name:string):boolean
    {
        if(null == this.$poolDic.get(name))
        return false;
        let poolMap:Array<any>=this.$poolDic.get(name);
        if(0 == poolMap.length)
        return false; 
        return true;
    }
    /**
     * 添加对象到对象池中
     */
    public addObjectToPool(name:string,target:any):void 
    {
        if(false == this.hasObjectByCalssName(name))
        this.$poolDic.set(name,[]);
        let objectMap:Array<any> = this.$poolDic.get(name);
        objectMap.push(target);
    }
}