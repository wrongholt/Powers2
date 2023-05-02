import 'phaser';
import CharacterClass from './parts/CharacterClass.js';
class FightScene extends Phaser.Scene {
  constructor(args) {
    super({ key: 'FightScene' });
  }
  preload() {}

  create() {
    var newHeight = this.game.config.height;
    var newWidth = this.game.config.width;
    let background = this.add.video(0, 0, 'background');
    background.setOrigin(0, 0);
    background.setSize(this.game.config.width, this.game.config.height);
    background.setScale(newWidth / 1080);
    background.play(true);

    this.leftChar = new CharacterClass(
      this,
      newWidth / 6 - 10,
      newHeight / 2,
      'Charity',
      'CharityIdle_000.png'
    );

    this.rightChar = this.add
      .sprite(
        newWidth / 1.2 - 15,
        newHeight / 2,
        'LarsThundersquat',
        'LarsThundersquatIdle_000.png'
      )
      .setInteractive()
      .setData({ name: 'Grandpa Gator', id: 'LarsThundersquat' })
      .setScale(newWidth / 1200);
    this.rightChar.flipX = true;

    var frameNames = this.anims.generateFrameNames('Charity', {
      start: 0,
      end: 19,
      zeroPad: 3,
      prefix: 'CharityIdle_',
      suffix: '.png',
    });
    var frameNames2 = this.anims.generateFrameNames('LarsThundersquat', {
      start: 0,
      end: 19,
      zeroPad: 3,
      prefix: 'LarsThundersquatIdle_',
      suffix: '.png',
    });

    this.anims.create({
      key: 'character1animation',
      frames: frameNames,
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'character2animation',
      frames: frameNames2,
      frameRate: 8,
      repeat: -1,
    });

    this.leftChar.anims.play('character1animation');
    this.rightChar.anims.play('character2animation');
  }
  characterClicked(character) {
    character.on('pointerdown', function (pointer) {
      this.setTint(11843512);
      var theCharacterData = this.getData('id');
      console.log(theCharacterData);
      this.scene.scene.start('GatorCampScene', { id: theCharacterData });
    });
    character.on('pointerout', function (pointer) {
      this.clearTint();
    });

    character.on('pointerup', function (pointer) {
      this.clearTint();
    });
  }
}
class CustomSpineObject3 {
  constructor(scene, x, y, key, animationName, loop) {
    this.scene = scene;

    this.parent = scene.add.container(0, 0);

    this.spine = scene.make.spine({ scene, x, y, key, animationName, loop });

    this.parent.add(this.spine);
  }
}
export default FightScene;
