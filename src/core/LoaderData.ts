/*
* tang;
*/
class LoaderData{

    public LoaderType:any;//加载类型
    public LoaderUrl:any;//加载URL
    public LoaderComFun:any =null;//加载完成的回调函数
    public LoaderErrorFun:any=null //加载错误的回调函数
    public LoaderProFun:any = null ;//加载过程的回调函数
    public LoaderPrivorty:any = 1;//加载优先级 0最高
    public ExtarData:any = null;//额外参数
    constructor()
    {

    }
}