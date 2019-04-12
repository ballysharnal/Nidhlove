class Level extends Phaser.Scene {
    constructor() {
        super('level'); 
    }

    create() {
        //INSERT ALL ASSETS TO SHOW HERE
      
        this.add.image(-550, -350, 'BG').setOrigin(0,0)
        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(175, 623, 'sol');
        this.platforms.create(47, 623, 'sol');
        this.platforms.create(400, 623, 'sol');
        this.platforms.create(300, 623, 'sol');
        this.platforms.create(500, 623, 'sol');
        this.platforms.create(570, 623, 'sol');
        this.platforms.create(50, 550, 'assRight');
        this.platforms.create(50, 550, 'bow');
        this.platforms.create(715, 568, 'ground').setScale(1.5).refreshBody();
        this.platforms.create(750, 420, 'ground');

        // Character sprites & physics
        this.player = this.physics.add.sprite(100, 450, 'player1');
        this.physics.add.collider(this.player, this.platforms);

        this.player.setScale(2);
        this.player.body.setSize(17, 37);
        this.player.body.setOffset(15, -1);
        this.player.setBounce(0);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravityY(1200);
        this.player.health = 10;
        //Character sprites & physics player 2

        this.player2 = this.physics.add.sprite(200, 450, 'player2');
        this.physics.add.collider(this.player2, this.platforms);
        this.physics.add.collider(this.player, this.player2, this.damageTaken, null, this);
        this.player2.setScale(2);
        this.player2.body.setSize(17, 37);
        this.player2.body.setOffset(15, -1);
        this.player2.setBounce(0);
        this.player2.setCollideWorldBounds(true);
        this.player2.body.setGravityY(1200);
        this.player2.health = 10;

        // Character Anims
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player1', { start: 8, end: 13 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'player1', frame: 0 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player1', { start: 8, end: 13 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'down',
            frames: [{ key: 'player1', frame: 4 }],
            frameRate: 10,
            repeat: -1
        });

        this.bow = this.physics.add.group({
            key: 'bow',
            repeat: 5,
            setXY: { x: 1, y: -50, stepX: 150 }
        });

        this.bow.children.iterate(function (child) {
    
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        
        });

        this.physics.add.collider(this.bow, this.platforms);
        this.physics.add.overlap(this.player, this.bow, collectStar, null, this);
       // this.physics.arcade.overlap(this.player, this.player2, this.damageTaken());
        function collectStar (player, star){
            star.disableBody(true, true);
        }

    }
    
        

    

    // INSERT FUNCTIONS FOR UPDATE

  

    // USE YOUR FUNCTIONS HERE!
    update() {
        


        this.cursors = this.input.keyboard.createCursorKeys();
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
    
            this.player.anims.play('left', true);
            this.player.flipX = true;
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
    
            this.player.anims.play('right', true);
            this.player.flipX = false;
        }
        else if (this.cursors.down.isDown) {
            this.player.setVelocityX(0);
    
            this.player.anims.play('down', true);
        }

        else {
            this.player.setVelocityX(0);
    
            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-630);
        }
        else if (this.cursors.down.isDown && !this.player.body.touching.down) {
            this.player.setVelocityY(1200);
            this.player.anims.play('down');
        }

        //Collision entre les deux joueurs

        //this.game.physics.arcade.collide(this.player, this.player2, this.damageTaken);
    }
    
    damageTaken() {
        this.player2.health -= 1;
        console.log(this.player2.health);
    }
};
