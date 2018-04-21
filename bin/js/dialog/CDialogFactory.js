/*
* tang 弹窗管理
*/
var CDialogFactory = /** @class */ (function () {
    function CDialogFactory() {
        if (false == CDialogFactory.$open) {
            console.log("\n错误实例化CDialogFactory,请通过CDialogFactory.inst实例化");
            return;
        }
        this.$diaogDic = new Laya.Dictionary();
        CDialogFactory.$inst = this;
    }
    Object.defineProperty(CDialogFactory, "inst", {
        get: function () {
            null == CDialogFactory.$inst && false == CDialogFactory.$open ? (CDialogFactory.$open = true) && new CDialogFactory() : 0;
            return CDialogFactory.$inst;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 通过ID得到相应界面
     */
    CDialogFactory.prototype.getDialogByID = function (id) {
        if (null == this.$diaogDic.get(id))
            this.$diaogDic.set(id, new window[id]());
        var dialog = this.$diaogDic.get(id);
        return dialog;
    };
    CDialogFactory.$inst = null;
    CDialogFactory.$open = false;
    return CDialogFactory;
}());
//# sourceMappingURL=CDialogFactory.js.map