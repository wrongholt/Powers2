import 'phaser';
import CharacterClass from './parts/CharacterClass.js';
class CharacterSelectionScene extends Phaser.Scene {
  constructor(args) {
    super();
  }
  preload() {}
  create() {
    var newHeight = this.game.config.height;
    var newWidth = this.game.config.width;
    let background = this.add.video(0, 0, 'background');
    background.setOrigin(0, 0);
    background.setSize(newWidth, newHeight);
    background.setScale(newWidth / 1080);
    background.play(true);
    var newChar = chacterContainer(this);
    // this.anims.create({
    //   key: 'characteranimation0',
    //   frames: this[newChar[0]],
    //   frameRate: 8,
    //   repeat: -1,
    // });
    // this.anims.create({
    //   key: 'characteranimation1',
    //   frames: this[newChar[1]],
    //   frameRate: 8,
    //   repeat: -1,
    // });
    // newChar[0].anims.play('characteranimation0');
    // newChar[1].anims.play('characteranimation1');
    // newChar[2].anims.play('characteranimation2');
    // newChar[3].anims.play('characteranimation3');
    // newChar[4].anims.play('characteranimation4');
    // newChar[5].anims.play('characteranimation5');
    // newChar[6].anims.play('characteranimation6');
    // newChar[7].anims.play('characteranimation7');
    // newChar[8].anims.play('characteranimation8');
    // newChar[9].anims.play('characteranimation9');
    // newChar[10].anims.play('characteranimation10');
    // newChar[11].anims.play('characteranimation11');
    // newChar[12].anims.play('characteranimation12');
    // newChar[13].anims.play('characteranimation13');
    Phaser.Actions.GridAlign(newChar, {
      width: 7,
      height: 2,
      cellWidth: 200,
      cellHeight: 450,
      x: 20,
      y: 250,
    });
  }
}
function chacterContainer(scene) {
  const charArray = [
    'Argus',
    'Charity',
    'Edge',
    'ElectricMean',
    'Karrigan',
    'LarsThundersquat',
    'Lillith',
    'Randell',
    'SharpySharp',
    // 'Elkeema',
    'CaptainNemo',
    'DejahThoris',
    'JohnCarter',
  ];
  var newChar = [];
  for (var i = 0; i < charArray.length; ) {
    var character = charArray[i];
    var group;
    group = scene.add.group();
    var rect = scene.add.rectangle(0, 0, 200, 450);
    var color = Phaser.Display.Color.HexStringToColor('#000000').color;
    console.log(character);
    rect.setStrokeStyle(2, color);
    var char = new CharacterClass(
      scene,
      0,
      0,
      character,
      character + 'Idle_000.png'
    );
    group.add(rect);
    group.add(char);
    // i % 1 ? 20 : i * 100 + 20,
    // i % 2 ? newHeight / 2 + 20 : 20,
    char.setScale(0.6);
    newChar.push(group);
    i++;
  }
  console.log('NEW CHAR ARRAY!!!!!!!', newChar);

  return newChar;
}
export default CharacterSelectionScene;
