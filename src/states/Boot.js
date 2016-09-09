class BootState extends Phaser.State {

	 preload() {
      this.load.image('preloader', 'assets/preloader.gif');
    }

    create () {
      this.game.input.maxPointers = 1;

        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
      if (this.game.device.desktop) {
      } else {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.forceOrientation(true);
      }

      this.game.state.start('Preloader');
    }
}

export default BootState;
