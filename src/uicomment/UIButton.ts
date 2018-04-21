/*
* 
*/
class UIButton extends Laya.Button
{
    
    private $mask:Laya.Sprite;
    private $locationInit:boolean = false;
    private $startPoint:Laya.Point;
    private $clickFun:any=null;
    private $wnd:CWindow ;//对窗口对象的引用
    private $clickRestTime:any = 500;
    private $clickCallBool:boolean=true;//是否响应单机事件
    private $initBool:boolean=false;//是否进行初始化
    constructor(wnd:CWindow)
    {
       super();
       this.$wnd =wnd;
       wnd = null;
       this.on(Laya.Event.ADDED,this,this.enterStageCall);
    }
    private enterStageCall():void
    {

       this.on(Laya.Event.CLICK,this,this.clickButtonCall)
       if(true == this.$initBool)
       return ;
       this.pivotX = (this.width>>1);
       this.pivotY = (this.height>>1);
       this.x = this.x+(this.width>>1);
       this.y = this.y+(this.height>>1);
       this.$initBool = true;
    }
    public set clickFun(fun:any){this.$clickFun = fun}
    /**
     * 設置父對象界面
     */
    public set parentWnd(wnd:CWindow){this.$wnd = wnd && (wnd = null)}

    private clickButtonCall()
    {
        this.mouseEnabled = false;
        this.gray =true;
        null !=this.$clickFun && this.$clickFun();
        Laya.timer.once(this.$clickRestTime,this,function()
        {
         this.mouseEnabled = true;
         this.gray = false;
        },null,true)
    }

    /**
     * 设置下次点击有效时间
     */
    public set clickResTimer(value:any){this.$clickRestTime = value}

}