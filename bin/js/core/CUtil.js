/*
* tang 通用函数;
*/
var CUtil = /** @class */ (function () {
    function CUtil() {
    }
    CUtil.Log = function (str) {
        GameConfig.DEBUG_MODE && console.log(str);
    };
    /**
  * 数组的多属性排序
  * @param sourceArr 原数组
  * @param sortAttr 属性数组 [{attrname:...},{attrname:...,method:<||>}];
  */
    CUtil.MapMultAttrbuteSort = function (sourceArr, sortAttr) {
        var attrbute = sortAttr[0];
        var index;
        var tempob;
        var battleOne;
        var maxValue;
        var contiuneBool = true;
        for (var i = 0; i < sourceArr.length; i++) {
            index = i;
            for (var j = i + 1; j < sourceArr.length; j++) {
                contiuneBool = true;
                for (var z = 0; z < sortAttr.length; z++) {
                    if (false == contiuneBool)
                        break;
                    battleOne = sourceArr[j][sortAttr[z]["attrname"]];
                    maxValue = sourceArr[index][sortAttr[z]["attrname"]];
                    switch (sortAttr[z]["method"]) {
                        case ">":
                            if (battleOne > maxValue) {
                                index = j;
                                contiuneBool = false;
                            }
                            else if (battleOne == maxValue)
                                contiuneBool = true;
                            else
                                contiuneBool = false;
                            break;
                        case "<":
                            if (battleOne < maxValue) {
                                contiuneBool = false;
                                index = j;
                            }
                            else if (battleOne == maxValue)
                                contiuneBool = true;
                            else
                                contiuneBool = false;
                            break;
                    }
                }
            }
            tempob = sourceArr[i];
            sourceArr[i] = sourceArr[index];
            sourceArr[index] = tempob;
        }
        return sourceArr;
    };
    return CUtil;
}());
//# sourceMappingURL=CUtil.js.map