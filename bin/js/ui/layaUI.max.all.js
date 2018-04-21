var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var login;
    (function (login) {
        var LoginWindowUI = /** @class */ (function (_super) {
            __extends(LoginWindowUI, _super);
            function LoginWindowUI() {
                return _super.call(this) || this;
            }
            LoginWindowUI.prototype.createChildren = function () {
                View.regComponent("UIButton", UIButton);
                _super.prototype.createChildren.call(this);
                this.createView(ui.login.LoginWindowUI.uiView);
            };
            LoginWindowUI.uiView = { "type": "View", "props": { "width": 750, "runtime": "UIButton", "height": 1334 }, "child": [{ "type": "Image", "props": { "y": -3, "x": 0, "width": 751, "skin": "loginview/denglu.jpg", "height": 1345 } }, { "type": "Button", "props": { "y": 998, "x": 169, "width": 416, "var": "startGameBtn", "toggle": true, "stateNum": 1, "skin": "loginview/startgame.png", "runtime": "UIButton", "pivotX": 5, "height": 113 } }, { "type": "Image", "props": { "y": 838, "x": 22, "skin": "loginview/id.png" } }, { "type": "Image", "props": { "y": 854, "x": 523, "skin": "loginview/huanqu.png" } }] };
            return LoginWindowUI;
        }(View));
        login.LoginWindowUI = LoginWindowUI;
    })(login = ui.login || (ui.login = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map