class LevelLoader extends Phaser.Scene {
    constructor() {
        super('levelLoader'); 
    }
    preload() {

        this.load.image('BG', 'assets/BG.png');
        this.load.image('ground', 'assets/rock.png')
        this.load.image('sol', 'assets/sol.png')
        this.load.image('assRight', 'assets/assRight.png')
        this.load.image('bow', 'assets/bow.png')
        this.load.spritesheet('player1',
            'assets/Player1.png', {
                frameWidth: 50,
                frameHeight: 37
            }
        );
        this.load.spritesheet('player2',
            'assets/Player2.png', {
                frameWidth: 50,
                frameHeight: 37
            }
        );
    }
    
    create() {
        this.add.text(20, 20, "TITLE HERE");
        this.scene.start("level");
    }

}