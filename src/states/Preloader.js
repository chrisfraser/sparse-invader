class PreloaderState extends Phaser.State {
	constructor() {
		super();
		this.asset = null
		this.ready = false;
	}

	preload() {
		this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');

		this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
		this.load.setPreloadSprite(this.asset);

		this.loadResources();
	}

	loadResources() {
		this.load.image('ship', 'assets/ship.png');
		this.load.image('bullet', 'assets/bullet.png');
		this.load.image('alien', 'assets/alien.png');
		this.load.image('bomb', 'assets/bomb.png');
		this.load.spritesheet('explosion', 'assets/explosion.png', 80, 80);
		this.load.audio('shoot', 'assets/sounds/shoot.wav');
		this.load.audio('explode', 'assets/sounds/explode.wav');
		this.load.audio('bomb', 'assets/sounds/bomb.wav');
		this.load.bitmapFont('minecraftia', 'assets/fonts/minecraftia.png', 'assets/fonts/minecraftia.xml');
		this.load.shader('spaceclouds', 'assets/shaders/spaceclouds.frag');
	}

	create() {
		this.asset.cropEnabled = false;
	}

	update() {
		if (!!this.ready) {
			this.game.state.start('Game');
		}
	}

	onLoadComplete() {
		this.ready = true;
	}

}

export default PreloaderState;
