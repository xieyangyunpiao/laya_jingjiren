/*
* tang 对象的克隆;
*/
class CObjctClone extends Laya.Dictionary
{
      
    private $target:any;
    constructor(target:any)
    {
           super();
           this.$target = target;
           target = null;
           this.clone(this,this.$target);
           this.$target = null;
    }
    private clone(source:any,target:any)
    {
     for(let keys in target)
     {
        if(typeof(target[keys])=="number" || typeof(target[keys])=="string" || typeof(target[keys]))
        {
            (<Laya.Dictionary>source).set(keys,target[keys])
        }
        else
        {
            (<Laya.Dictionary>source).set(keys,new Laya.Dictionary());
            this.clone((<Laya.Dictionary>source).get(keys),target[keys]);
        }
     }
     source = null;
     target = null;
    }
}