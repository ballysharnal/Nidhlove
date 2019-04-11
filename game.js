window.onload = () =>  {
    var game = new Phaser.Game(config);
}

let config = {
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [MenuLoader, Menu, LevelLoader, Level], 
    pixelArt: true
}


