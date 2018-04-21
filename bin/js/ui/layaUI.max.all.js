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
        var LoginGameCopyrightUI = /** @class */ (function (_super) {
            __extends(LoginGameCopyrightUI, _super);
            function LoginGameCopyrightUI() {
                return _super.call(this) || this;
            }
            LoginGameCopyrightUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.login.LoginGameCopyrightUI.uiView);
            };
            LoginGameCopyrightUI.uiView = { "type": "View", "props": { "width": 750, "mouseThrough": false, "mouseEnabled": true, "height": 1334, "cacheAs": "bitmap" }, "child": [{ "type": "Label", "props": { "y": 300, "x": 197, "text": "《健康游戏忠告》", "fontSize": 42, "font": "Microsoft YaHei", "color": "#adabab", "bold": true } }, { "type": "Label", "props": { "y": 370, "x": 102, "text": "抵制不良游戏，拒绝盗版游戏。", "fontSize": 42, "font": "Microsoft YaHei", "color": "#adabab", "bold": true } }, { "type": "Label", "props": { "y": 440, "x": 102, "text": "注意自我保护，谨防受骗上当。", "fontSize": 42, "font": "Microsoft YaHei", "color": "#adabab", "bold": true } }, { "type": "Label", "props": { "y": 510, "x": 102, "text": "适度游戏益脑，沉迷游戏伤身。", "fontSize": 42, "font": "Microsoft YaHei", "color": "#adabab", "bold": true } }, { "type": "Label", "props": { "y": 580, "x": 102, "text": "合理安排时间，享受健康生活。", "fontSize": 42, "font": "Microsoft YaHei", "color": "#adabab", "bold": true } }, { "type": "Label", "props": { "y": 960, "x": 147, "text": "游戏著作权人：南京蓝狐科技发展有限公司", "fontSize": 24, "font": "Microsoft YaHei", "color": "#adabab", "bold": true } }, { "type": "Label", "props": { "y": 1001, "x": 147, "text": "出版单位：咪咕互动娱乐有限公司", "fontSize": 24, "font": "Microsoft YaHei", "color": "#adabab", "bold": true } }, { "type": "Label", "props": { "y": 1042, "x": 147, "text": "批准文号：新广出审[2017]1565号", "fontSize": 24, "font": "Microsoft YaHei", "color": "#adabab", "bold": true } }, { "type": "Label", "props": { "y": 1083, "x": 147, "text": "出版物号：ISBN 978-7-7979-5074-9", "fontSize": 24, "font": "Microsoft YaHei", "color": "#adabab", "bold": true } }, { "type": "Label", "props": { "y": 1124, "x": 147, "text": "文网游备字：[2017] M-CSG 0365号", "fontSize": 24, "font": "Microsoft YaHei", "color": "#adabab", "bold": true } }] };
            return LoginGameCopyrightUI;
        }(View));
        login.LoginGameCopyrightUI = LoginGameCopyrightUI;
    })(login = ui.login || (ui.login = {}));
})(ui || (ui = {}));
(function (ui) {
    var login;
    (function (login) {
        var LoginServerListUI = /** @class */ (function (_super) {
            __extends(LoginServerListUI, _super);
            function LoginServerListUI() {
                return _super.call(this) || this;
            }
            LoginServerListUI.prototype.createChildren = function () {
                View.regComponent("UIButton", UIButton);
                _super.prototype.createChildren.call(this);
                this.createView(ui.login.LoginServerListUI.uiView);
            };
            LoginServerListUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 170, "x": 40, "width": 680, "skin": "loginview/kuang.png", "sizeGrid": "46,37,38,47", "height": 1033 } }, { "type": "Image", "props": { "y": 399, "x": 71, "width": 617, "skin": "loginview/diban1.png", "sizeGrid": "23,27,24,22", "height": 787 } }, { "type": "Image", "props": { "y": 258, "x": 47, "skin": "loginview/cxjwsreet.png" } }, { "type": "Label", "props": { "y": 271, "x": 87, "width": 192, "text": "217", "height": 40, "fontSize": 28, "font": "Microsoft YaHei", "color": "#704300", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 212, "x": 86, "skin": "loginview/zi.png" } }, { "type": "Button", "props": { "y": 338, "x": 260, "stateNum": 2, "skin": "loginview/btn_xuan.png", "runtime": "UIButton" }, "child": [{ "type": "Button", "props": { "y": 17, "x": 2, "stateNum": 2, "skin": "loginview/btn_green.png", "mouseEnabled": true } }] }, { "type": "Button", "props": { "y": 338, "x": 90, "stateNum": 2, "skin": "loginview/btn_xuan.png", "runtime": "UIButton" }, "child": [{ "type": "Button", "props": { "y": 17, "x": 26, "toggle": true, "stateNum": 2, "skin": "loginview/btn_bule.png", "selected": true } }] }] };
            return LoginServerListUI;
        }(View));
        login.LoginServerListUI = LoginServerListUI;
    })(login = ui.login || (ui.login = {}));
})(ui || (ui = {}));
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
            LoginWindowUI.uiView = { "type": "View", "props": { "width": 750, "runtime": "UIButton", "height": 1334 }, "child": [{ "type": "Image", "props": { "y": -3, "x": 0, "width": 751, "skin": "loginview/denglu.jpg", "height": 1345 } }, { "type": "Button", "props": { "y": 998, "x": 169, "width": 416, "var": "startGameBtn", "toggle": true, "stateNum": 1, "skin": "loginview/startgame.png", "runtime": "UIButton", "pivotX": 5, "height": 113 } }, { "type": "Image", "props": { "y": 838, "x": 22, "skin": "loginview/id.png" } }, { "type": "Image", "props": { "y": 854, "x": 523, "skin": "loginview/huanqu.png" } }, { "type": "Label", "props": { "y": 844, "x": 240, "width": 262, "var": "servername", "valign": "middle", "text": "请选择服务区", "height": 56, "fontSize": 30, "color": "#f1ebea", "align": "center" } }, { "type": "Sprite", "props": { "y": 846, "x": 45, "width": 650, "var": "selectserver", "height": 50 } }] };
            return LoginWindowUI;
        }(View));
        login.LoginWindowUI = LoginWindowUI;
    })(login = ui.login || (ui.login = {}));
})(ui || (ui = {}));
(function (ui) {
    var main;
    (function (main) {
        var MainWindowUI = /** @class */ (function (_super) {
            __extends(MainWindowUI, _super);
            function MainWindowUI() {
                return _super.call(this) || this;
            }
            MainWindowUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.main.MainWindowUI.uiView);
            };
            MainWindowUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": -2, "x": 0, "width": 748, "skin": "main/bg.jpg", "height": 1335 } }] };
            return MainWindowUI;
        }(View));
        main.MainWindowUI = MainWindowUI;
    })(main = ui.main || (ui.main = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map