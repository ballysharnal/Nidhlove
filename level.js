class Level extends Phaser.Scene {
	constructor() {
		super('level');
	}

	create() {
		//INSERT ALL ASSETS TO SHOW HERE
		this.background1 = this.add.tileSprite(450, 250, config.width * 5, config.height * 2, "titleBackground")
		this.background2 = this.add.tileSprite(100, 455, config.width * 5, config.height * 2, "backg")
		this.platforms = this.physics.add.staticGroup();

		this.platforms.create(60, 650, 'ground');
		this.platforms.create(-500, 650, 'ground');
		this.platforms.create(-400, 650, 'ground');
		this.platforms.create(-300, 650, 'ground');
		this.platforms.create(-200, 650, 'ground');
		this.platforms.create(-100, 650, 'ground');
		this.platforms.create(0, 650, 'ground');
		this.platforms.create(150, 650, 'ground');
		this.platforms.create(250, 650, 'ground');
		this.platforms.create(350, 650, 'ground');
		this.platforms.create(400, 650, 'ground');
		this.platforms.create(500, 650, 'ground');
		this.platforms.create(600, 650, 'ground');
		this.platforms.create(720, 650, 'ground');
		this.platforms.create(830, 650, 'ground');
		this.platforms.create(930, 650, 'ground');
		this.platforms.create(1030, 650, 'ground');
		this.platforms.create(1130, 650, 'ground');
		this.platforms.create(570, 650, 'ground');
		this.platforms.create(670, 650, 'ground');
		this.platforms.create(770, 650, 'ground');
		this.platforms.create(870, 650, 'ground');
		this.platforms.create(970, 650, 'ground');
		this.platforms.create(1070, 650, 'ground');
		this.platforms.create(1170, 650, 'ground');
		this.platforms.create(1270, 650, 'ground');
		this.platforms.create(1370, 650, 'ground');
		this.platforms.create(1370, 650, 'ground');
		this.platforms.create(1470, 650, 'ground');
		this.platforms.create(1570, 650, 'ground');
		this.platforms.create(1670, 650, 'ground');
		this.platforms.create(1495, 180, 'ground');
		this.platforms.create(1495, 280, 'ground');
		this.platforms.create(1495, 380, 'ground');
		this.platforms.create(1495, 480, 'ground');
		this.platforms.create(1495, 580, 'ground');
		this.platforms.create(1595, 180, 'ground');
		this.platforms.create(1595, 280, 'ground');
		this.platforms.create(1595, 380, 'ground');
		this.platforms.create(1595, 480, 'ground');
		this.platforms.create(1595, 580, 'ground');
		this.platforms.create(1695, 180, 'ground');
		this.platforms.create(1695, 280, 'ground');
		this.platforms.create(1695, 380, 'ground');
		this.platforms.create(1695, 480, 'ground');
		this.platforms.create(1695, 580, 'ground');
		this.platforms.create(1795, 180, 'ground');
		this.platforms.create(1795, 280, 'ground');
		this.platforms.create(1795, 380, 'ground');
		this.platforms.create(1795, 480, 'ground');
		this.platforms.create(1795, 580, 'ground');
		this.platforms.create(-500, 180, 'ground').flipX=true;
		this.platforms.create(-500, 280, 'ground').flipX=true;
		this.platforms.create(-500, 380, 'ground').flipX=true;
		this.platforms.create(-500, 480, 'ground').flipX=true;
		this.platforms.create(-500, 580, 'ground').flipX=true;
		this.add.image(-150, 250, 'sol')
		this.add.image(450, 250, 'sol')
		this.add.image(800, 250, 'sol')
		this.add.image(1200, 250, 'sol')
		this.add.image(1600, 250, 'sol')
		this.add.image(2000, 250, 'sol')
		this.platforms.create(50, 550, 'assRight');
		this.platforms.create(715, 568, 'ground').setScale(1.5).refreshBody();
		this.platforms.create(815, 568, 'ground').setScale(1.5).refreshBody().flipX=true;

		this.platforms.create(750, 420, 'ground');

		this.background4 = this.add.tileSprite(100, 455, config.width * 5, config.height * 2, "foret1")


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

		this.background4 = this.add.tileSprite(100, 455, config.width * 5, config.height * 2, "rayons")
		this.background3 = this.add.tileSprite(100, 455, config.width * 5, config.height * 2, "foret")
		this.background4 = this.add.tileSprite(100, 455, config.width * 5, config.height * 2, "rayons2")
		this.background5 = this.add.tileSprite(100, 455, config.width * 5, config.height * 2, "foret2")
		this.background6 = this.add.tileSprite(100, 450, config.width * 5, config.height * 2, "sol1")

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
    
        this.anims.create({
                key: 'space2',
                frames : this.anims.generateFrameNumbers('player2', {start: 88 , end: 94 }),
            });


        }


    
    
    

		this.cameras.main.setBounds(-500, 0, 1920 * 2, 1080 * 2);
    this.physics.world.setBounds(-500, 0, 1920, 1080 * 2);

		this.cursors = this.input.keyboard.createCursorKeys();

		this.player.setCollideWorldBounds(true);
	
		this.cameras.main.startFollow(this.player);

    this.cameras.main.followOffset.set(-15, 1000);

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
