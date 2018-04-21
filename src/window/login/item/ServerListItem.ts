/*
* tang;
*/
class ServerListItem extends UIItem{

    private $serverName:Laya.Label;
    constructor()
    {
         super();
         this.$serverName = new Laya.Label();
         this.$serverName.fontSize = 30;
         this.addChild(this.$serverName);
         this.$serverName.text = " "
         this.width = 100;
         this.height = 25;
    }

    public set data(value:any)
    {
        this.$serverName.changeText(value.name)
    }
}