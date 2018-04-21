/*
* tang 数据结构的克隆;
*/
class CTable{

    constructor(target:any)
    {

       this.dataClone(this,target)    
    } 

    private dataClone(source:any,target:any):void 
    {
            for(let i in target)
            {
                let value:any = target[i];
                if(typeof(value)=="string" || typeof(value)=="boolean" || typeof(value) == "number")
                this[i] = target[i]
                else
                this.dataClone(new Laya.Dictionary(),target[i])
            }
            target = null;
            source = null;
    }
}