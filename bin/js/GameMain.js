// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(GameConfig.STAGE_WIDTH, GameConfig.STAGE_HEIGHT, Laya.WebGL);
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE; //垂直居中对齐+
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER; //水平居中对齐
        Laya.stage.width = GameConfig.STAGE_WIDTH;
        Laya.stage.height = GameConfig.STAGE_HEIGHT;
        Laya.stage.scaleMode = "showall"; //设置适配模式
        //自动竖屏，让游戏的水平方向始终与浏览器显示屏幕的最长边保持垂直。
        Laya.stage.screenMode = "none";
        Laya.stage.frameRate = Laya.Stage.FRAME_FAST;
        Laya.stage.bgColor = "#e9e9e9";
        Laya.Stat.show(0, 0);
        Laya.timer.once(500, this, this.initApp);
    }
    GameMain.prototype.initApp = function () {
        Core.inst.layer.openWindowByID(CWindowID.LOGIN_WINDOW, null);
        //  CUtil.Log("节点模式:"+Laya.Render.isConchWebGL)
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map