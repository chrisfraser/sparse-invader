import RainbowText from 'objects/RainbowText';
import Player from 'objects/Player';

class GameState extends Phaser.State {

	create() {
		let game = this.game;
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		// let text = new RainbowText(game, center.x, center.y, "- phaser -\nFuck you Taylor\nEat a dick!!");
		// text.anchor.set(0.5);
		this.highScore = 0;
		this.player = new Player(game, center.x, this.game.height - 50, 'ship', 20);

		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.filter = new Phaser.Filter(this.game, null, this.game.cache.getShader('spaceclouds'));
		this.filter.addToWorld(0, 0, this.game.width, this.game.height);

		this.setupText();
	}

	update() {
		this.filter.update();
		this.updateText();
	}

	setupText() {
		let game = this.game;
		let tint = 0xBBBBBB;

		this.livesText = this.add.bitmapText(game.world.bounds.width - 16, 8, 'minecraftia', '', 20);
		this.livesText.anchor.set(1, 0);
		this.livesText.tint = tint;
		this.livesText.text = 'LIVES: ' + this.player.lives;

		this.scoreText = this.add.bitmapText(game.world.centerX, 8, 'minecraftia', '', 20);
		this.scoreText.anchor.set(0.5, 0);
		this.scoreText.tint = tint;

		this.highScoreText = this.add.bitmapText(16, 8, 'minecraftia', '', 20);
		this.highScoreText.anchor.set(0, 0);
		this.highScoreText.tint = tint;
	}

	updateText() {
		let score = this.player.score;
		if (score > this.highScore) {
			this.highScore = score;
		}
		this.scoreText.text = pad(score, 6);
		this.highScoreText.text = "HIGH: " + pad(this.highScore, 6);
	}

}

function pad(number, length) {
	var str = '' + number;
	while (str.length < length) {
		str = '0' + str;
	}
	return str;
}

export default GameState;
