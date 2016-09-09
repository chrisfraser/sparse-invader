class Player extends Phaser.Sprite {

	constructor(game, x, y, sprite, speed) {
		super(game, x, y, sprite);

		this._speed = speed;
		this.lives = 3;
		this.score = 0;

		this.anchor.setTo(0.5, 0.5);
		this.game.physics.enable(this, Phaser.Physics.ARCADE);

		this.body.bounce.x = 0.5;
		this.body.collideWorldBounds = true;
		// Setup controls
		this.cursors = game.input.keyboard.createCursorKeys();
		this.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		// Add player to the stage
		this.game.stage.addChild(this);
	}

	update(){
		this.playerMovement();
	}

	playerMovement() {
		let maxVelocity = 500;

		let drag = 8;

		let player = this;
		let cursors = this.cursors;

		if (cursors.left.isDown && player.body.velocity.x > -maxVelocity) {
			// Move to the left
			player.body.velocity.x -= this._speed;
		}
		else if (cursors.right.isDown && player.body.velocity.x < maxVelocity) {
			// Move to the right
			player.body.velocity.x += this._speed;
		}
		else {
			// Slow down
			if (player.body.velocity.x > 0) {
				player.body.velocity.x -= drag;
			}
			else if (player.body.velocity.x < 0) {
				player.body.velocity.x += drag;
			}
		}
	}


}

export default Player;