/*
* tang 戰鬥位置;
*/
class BattleLocationItem extends Laya.Box{
    constructor()
    {
       super()
       this.graphics.drawRect(0,0,100,100,'#FF0000');
       this.width = 100;
       this.height = 100;
    }
}