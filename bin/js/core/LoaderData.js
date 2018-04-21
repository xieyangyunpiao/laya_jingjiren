/*
* tang;
*/
var LoaderData = /** @class */ (function () {
    function LoaderData() {
        this.LoaderComFun = null; //加载完成的回调函数
        this.LoaderErrorFun = null; //加载错误的回调函数
        this.LoaderProFun = null; //加载过程的回调函数
        this.LoaderPrivorty = 1; //加载优先级 0最高
        this.ExtarData = null; //额外参数
    }
    return LoaderData;
}());
//# sourceMappingURL=LoaderData.js.map