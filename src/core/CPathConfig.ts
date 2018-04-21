/*
* tang 路径配置
*/
class CPathConfig
{

    public static SpineAnimation_Fly:string="ani/fly/";
    public static SpineAnimation_Light:string="ani/Light/";
    public static SpineAnimation_Lottery:string="ani/Lottery/";
    public static SpineAnimation_Role:string="ani/role/";
    public static SpineAnimation_SingleAni:string="ani/SingleAni/";
    constructor()
    {

    }

    public static getSpineAnimatonPath(type:any,id:any):string
    {
         switch(type)
         {
             case CSpineAnimationType.LIGHT:
             return CPathConfig.SpineAnimation_Light+id+"/"+id+".sk";
             case CSpineAnimationType.LOTTERY:
             return CPathConfig.SpineAnimation_Lottery+id+"/"+id+".sk";
             case CSpineAnimationType.ROLE:
             return CPathConfig.SpineAnimation_Role+id+"/"+id+".sk";
             case CSpineAnimationType.SINGLEAni:
             return CPathConfig.SpineAnimation_SingleAni+id+"/"+id+".sk";
             case CSpineAnimationType.FLY:
             return CPathConfig.SpineAnimation_Fly+id+"/"+id+".sk";
         }
    }
}