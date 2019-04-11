window.onload = () =>  {
    var game = new Phaser.Game(config);
}

let config = {
    width: 256,
    height: 272,
    backgroundColor: 0x000000,
    scene: [MenuLoader, Menu, LevelLoader, Level], 
    pixelArt: true
}


