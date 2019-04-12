
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

        // Character sprites & physics 1
        this.player1 = this.physics.add.sprite(100, 450, 'player1');
        this.physics.add.collider(this.player1, this.platforms);

        this.player1.setScale(2);
        this.player1.body.setSize(17, 37);
        this.player1.body.setOffset(15, -1);
        this.player1.setBounce(0);
        this.player1.setCollideWorldBounds(true);
        this.player1.body.setGravityY(1200);
        this.player1.health = 10;
        //Character sprites & physics player 2

        this.player2 = this.physics.add.sprite(200, 450, 'player2');
        this.physics.add.collider(this.player2, this.platforms);

        this.player2.setScale(2);
        this.player2.body.setSize(17, 37);
        this.player2.body.setOffset(15, -1);
        this.player2.setBounce(0);
        this.player2.setCollideWorldBounds(true);
        this.player2.body.setGravityY(1200);
        this.player2.health = 10;
        

        // Character 1 Anims
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

        this.anims.create({
            key: 'space',
            frames : this.anims.generateFrameNumbers('player1', {start: 88 , end: 94 }),
        });
        // Character 2 Anims
        this.anims.create({
            key: 'A',
            frames: this.anims.generateFrameNumbers('player2', { start: 8, end: 13 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn2',
            frames: [{ key: 'player2', frame: 0 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'd',
            frames: this.anims.generateFrameNumbers('player2', { start: 8, end: 13 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 's',
            frames: [{ key: 'player2', frame: 4 }],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'z',
            frames: [{ key: 'player2', frame: 0 }],

            frameRate: 10,
            repeat: -1
        });

        this.bow = this.physics.add.group({
            key: 'bow',
            repeat: 5,
            setXY: { x: 1, y: -50, stepX: 150 }
        });

        this.bow.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });

        this.anims.create({
            key: 'space2',
            frames : this.anims.generateFrameNumbers('player2', {start: 88 , end: 94 }),
        });

        
    }

    
    
        

    

    // INSERT FUNCTIONS FOR UPDATE

    
  

    // USE YOUR FUNCTIONS HERE!
    update() {
        
        


        // Character1 UpdateAnimation
        this.playerOneUpdate = this.input.keyboard.createCursorKeys();
        if (this.playerOneUpdate.left.isDown) {
            this.player1.setVelocityX(-160);
    
            this.player1.anims.play('left', true);
            this.player1.flipX = true;
        }
        else if (this.playerOneUpdate.right.isDown) {
            this.player1.setVelocityX(160);
    
            this.player1.anims.play('right', true);
            this.player1.flipX = false;
        }
        else if (this.playerOneUpdate.down.isDown) {
            this.player1.setVelocityX(0);
    
            this.player1.anims.play('down', true);
        }

        else {
            this.player1.setVelocityX(0);
    
            this.player1.anims.play('turn');
        }

        if (this.playerOneUpdate.up.isDown && this.player1.body.touching.down) {
            this.player1.setVelocityY(-630);
        }
        else if (this.playerOneUpdate.down.isDown && !this.player1.body.touching.down) {
            this.player1.setVelocityY(1200);
            this.player1.anims.play('down');
        }


        

        if (this.playerOneUpdate.space.isDown) {
            this.physics.collide(this.player1, this.player2, this.damageTaken, null, this)
            this.player1.anims.play('space', true)
        }
        


        // Character2 UpdateAnimation
        //var keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q)

        this.playerTwoUpdate = this.input.keyboard.createCursorKeys();
     
        this.input.keyboard.on('keydown_Q', () => {
        this.player2.setVelocityX(-160);

        this.player2.anims.play('A', true);
        this.player2.flipX = true;
        });

        this.input.keyboard.on('keydown_D', () => {
            this.player2.setVelocityX(160);
    
            this.player2.anims.play('d', true);
            this.player2.flipX = false;
            
        })       

        this.input.keyboard.on('keydown_S', () => {
            this.player2.setVelocityX(0);
            this.player2.anims.play('s', true);
            this.player2.setVelocityY(1200);
        })
        this.input.keyboard.on('keydown_Z', () => {

            if (this.player2.body.touching.down) {
                this.player2.setVelocityY(-630);
                this.player2.anims.play('z', true);
            }   
        })
        this.input.keyboard.on('keydown_R', () => {
            this.physics.collide(this.player1, this.player2, this.damageTaken2, null, this)
            this.player2.anims.play('space2', true);
        }) 
        //KeyUp

        this.input.keyboard.on('keyup_Q', () => {
            this.player2.setVelocityX(0);
            this.player2.anims.play('turn2');     
        });

        this.input.keyboard.on('keyup_D', () => {
            this.player2.setVelocityX(0);
            this.player2.anims.play('turn2');
        })       

        this.input.keyboard.on('keyup_S', () => {
            this.player2.setVelocityX(0);
            this.player2.anims.play('turn2');    
        })
        
        this.input.keyboard.on('keyup_R', () => {
            
            this.player2.anims.play('turn2', true)
        }) 
            
        
        //Collision entre les deux joueurs

        //this.game.physics.arcade.collide(this.player1, this.player2, this.damageTaken);
    }
    // KEY TEST 

    damageTaken() {
        this.player2.health -= 1;
        console.log(this.player2.health);
        this.player2.body.reset(100,100);
    }

    damageTaken2() {
        this.player1.health -= 1;
        console.log(this.player1.health);
        this.player1.body.reset(100,100);
    }

}