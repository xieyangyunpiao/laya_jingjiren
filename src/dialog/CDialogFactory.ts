/*
* tang 弹窗管理
*/
class CDialogFactory
{

    private static $inst:CDialogFactory = null;
    private static $open:boolean = false;

    private $diaogDic:Laya.Dictionary;
    constructor()
    {
        
        if(false == CDialogFactory.$open)
        {
            console.log("\n错误实例化CDialogFactory,请通过CDialogFactory.inst实例化")
            return ;
        }
        this.$diaogDic =  new Laya.Dictionary();
        CDialogFactory.$inst = this;
    }


    public static get inst():CDialogFactory
    {
        null == CDialogFactory.$inst && false == CDialogFactory.$open ? (CDialogFactory.$open=true) && new CDialogFactory():0
        return CDialogFactory.$inst
    }
   /**
    * 通过ID得到相应界面
    */
    public getDialogByID(id:any):CDialog
    {
        if(null == this.$diaogDic.get(id))
        this.$diaogDic.set(id,new window[id]());
        let dialog:CDialog = this.$diaogDic.get(id);
        return dialog;
    }
}