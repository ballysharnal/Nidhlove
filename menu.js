class Menu extends Phaser.Scene {
    constructor() {
        super('menu'); 
    }
    
    create() {
        this.add.image(150, 150)
        this.add.text(20, 20, "Choose");
        this.scene.start("levelLoader");
    }

}
