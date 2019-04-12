window.onload = () =>  {
    var game = new Phaser.Game(config);
};

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0xD22C84,
    scene: [MenuLoader, Menu, LevelLoader, Level], 
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
};


