class MenuLoader extends Phaser.Scene {
    constructor() {
        super('menuLoader'); 
    }
    preload() {
        this.load.image("titleBackground", "assets/titleBackground.png");
        this.load.image("heart", "assets/heart.png");
        this.load.image("buttonStart", "assets/buttonStart.png");
    }
    create() {

        this.scene.start("menu");
    }

}