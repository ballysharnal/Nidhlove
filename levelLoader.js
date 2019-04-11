class LevelLoader extends Phaser.Scene {
    constructor() {
        super('levelLoader'); 
    }
    preload() {
        this.load.image("background", "assets/background.png");
        this.load.spritesheet("ship", "spritesheets/ship.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ship2", "spritesheets/ship2.png", {
            frameWidth: 32,
            frameHeight: 16
        });
        this.load.spritesheet("ship3", "spritesheets/ship3.png", {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet("explosion", "spritesheets/explosion.png", {
            frameWidth: 16,
            frameHeight: 16
        });
    }
    create() {
        this.add.text(20, 20, "TITLE HERE");
        this.scene.start("level");
    }

}