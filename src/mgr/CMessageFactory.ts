/*
* tang;
*/
class CMessageFactory
{
    private static $inst:CMessageFactory = null;
    private static $open:boolean = false;

    private $loginMessage:LoginMessage;//登录消息
    private $roleMessage:RoleMessage;//角色消息
    constructor()
    {
       if(false == CMessageFactory.$open)
       {
           console.log("错误实例化CMessageFactory,请通过CMessageFactory.inst实例化")
       }
       CMessageFactory.$inst = this;
    }

    public static get inst():CMessageFactory
    {
        null == CMessageFactory.$inst && false == CMessageFactory.$open ? (CMessageFactory.$open = true) && new CMessageFactory():0;
        return CMessageFactory.$inst
    }


    /**
     * 登录消息
     */
    public get loginMessage():LoginMessage
    {
        if(null == this.$loginMessage)
        this.$loginMessage  = new LoginMessage();
        
        return this.$loginMessage;
    }

   /**
    * 角色消息
    */
    public get roleMessage():RoleMessage
    {
        if(null == this.$roleMessage)
        this.$roleMessage = new RoleMessage();
        
        return this.$roleMessage;

    }
}