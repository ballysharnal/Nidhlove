class Menu extends Phaser.Scene {
    constructor() {
        super('menu'); 
    }
    
    create() {
        this.add.image(0,60, "titleBackground");
        this.heart = this.add.image(100,100, "heart").setScale(.10);
        this.heart1 = this.add.image(100,100, "heart").setScale(.10);
        this.heart2 = this.add.image(100,100, "heart").setScale(.10);
        this.heart3 = this.add.image(100,100, "heart").setScale(.10);
        this.heart4 = this.add.image(100,100, "heart").setScale(.10);
        this.heart5 = this.add.image(100,100, "heart").setScale(.10);
        this.heart6 = this.add.image(100,100, "heart").setScale(.10);
        this.heart7 = this.add.image(100,100, "heart").setScale(.10);
        this.heart8 = this.add.image(100,100, "heart").setScale(.10);
        this.heart9 = this.add.image(100,100, "heart").setScale(.10);
        this.heart10 = this.add.image(100,100, "heart").setScale(.10);


        this.buttonStart = this.add.image(400, 350, "buttonStart", { backgroundColor: 'null'});
        this.buttonStart.setScale(.5);
        

        this.add.text(180, 150, "NIDHLOVE", {
            font: "5rem Calibri", 
            fill: "pink",
        });
        
        this.buttonStart.setInteractive();
        this.input.on('gameobjectdown', this.skipMenuScene, this);

        this.add.text(20, 550, "project made by ...", {
            font: "2rem Calibri", 
            fill: "pink",
        });
    }


    skipMenuScene(pointer, gameObject) {
        this.scene.start("levelLoader");
    }

    moveHeart(heart, speed) {
        heart.y += speed;
        if (heart.y > config.height) {
            this.resetHeartPos(heart);
        }
    }

    resetHeartPos(heart) {
        heart.y = 0;
        let randomX = Phaser.Math.Between(0, config.width);
        heart.x = randomX;
    }

    update() {
        this.moveHeart(this.heart, 4);
        this.moveHeart(this.heart1, 2);
        this.moveHeart(this.heart2, 3);
        this.moveHeart(this.heart3, 4);
        this.moveHeart(this.heart4, 6);
        this.moveHeart(this.heart5, 1);
        this.moveHeart(this.heart6, 5);
        this.moveHeart(this.heart7, 3);
        this.moveHeart(this.heart8, 1);
        this.moveHeart(this.heart9, 2);
        this.moveHeart(this.heart10, 1);

        this.buttonStart.on('pointerover', () => { 
            this.buttonStart.setScale(.7);
        });
        this.buttonStart.on('pointerout', () => {
            this.buttonStart.setScale(.5);
        });
    }
}
