
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.login {
    export class LoginWindowUI extends View {
		public startGameBtn:UIButton;

        public static  uiView:any ={"type":"View","props":{"width":750,"runtime":"UIButton","height":1334},"child":[{"type":"Image","props":{"y":-3,"x":0,"width":751,"skin":"loginview/denglu.jpg","height":1345}},{"type":"Button","props":{"y":998,"x":169,"width":416,"var":"startGameBtn","toggle":true,"stateNum":1,"skin":"loginview/startgame.png","runtime":"UIButton","pivotX":5,"height":113}},{"type":"Image","props":{"y":838,"x":22,"skin":"loginview/id.png"}},{"type":"Image","props":{"y":854,"x":523,"skin":"loginview/huanqu.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("UIButton",UIButton);

            super.createChildren();
            this.createView(ui.login.LoginWindowUI.uiView);

        }

    }
}
