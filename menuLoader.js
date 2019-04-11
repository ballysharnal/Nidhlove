class MenuLoader extends Phaser.Scene {
    constructor() {
        super('menuLoader'); 
    }
    preload() {
        this.load.image("background", "assets/background.png");
        this.load.image("buttonStart", "assets/buttonStart.jpg")
    }
    create() {
        this.add.text(20, 20, "TITLE HERE");
        this.scene.start("menu");
    }

}