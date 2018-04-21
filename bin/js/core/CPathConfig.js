/*
* tang 路径配置
*/
var CPathConfig = /** @class */ (function () {
    function CPathConfig() {
    }
    CPathConfig.getSpineAnimatonPath = function (type, id) {
        switch (type) {
            case CSpineAnimationType.LIGHT:
                return CPathConfig.SpineAnimation_Light + id + "/" + id + ".sk";
            case CSpineAnimationType.LOTTERY:
                return CPathConfig.SpineAnimation_Lottery + id + "/" + id + ".sk";
            case CSpineAnimationType.ROLE:
                return CPathConfig.SpineAnimation_Role + id + "/" + id + ".sk";
            case CSpineAnimationType.SINGLEAni:
                return CPathConfig.SpineAnimation_SingleAni + id + "/" + id + ".sk";
            case CSpineAnimationType.FLY:
                return CPathConfig.SpineAnimation_Fly + id + "/" + id + ".sk";
        }
    };
    CPathConfig.SpineAnimation_Fly = "ani/fly/";
    CPathConfig.SpineAnimation_Light = "ani/Light/";
    CPathConfig.SpineAnimation_Lottery = "ani/Lottery/";
    CPathConfig.SpineAnimation_Role = "ani/role/";
    CPathConfig.SpineAnimation_SingleAni = "ani/SingleAni/";
    return CPathConfig;
}());
//# sourceMappingURL=CPathConfig.js.map