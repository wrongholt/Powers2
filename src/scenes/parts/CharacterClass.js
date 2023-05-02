import 'phaser';

class CharacterClass extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    var newHeight = this.scene.game.config.height;
    var newWidth = this.scene.game.config.width;
    this.scene.sys.updateList.add(this);
    this.scene.sys.displayList.add(this);
    this.setScale(newWidth / 1200);
    this.setOrigin(0, 0);
    console.log(this);
    console.log(texture);
  }
}
export default CharacterClass;
