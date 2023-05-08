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
      'Elkeema',
      'CaptainNemo',
      'DejahThoris',
      'JohnCarter',
    ];
    this.anims.create({
      key: 'characteranimation0',
      frames: this[charArray[0]],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'characteranimation1',
      frames: this[charArray[1]],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'characteranimation2',
      frames: this[charArray[2]],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'characteranimation3',
      frames: this[charArray[3]],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'characteranimation4',
      frames: this[charArray[4]],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'characteranimation5',
      frames: this[charArray[5]],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'characteranimation6',
      frames: this[charArray[6]],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'characteranimation7',
      frames: this[charArray[7]],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'characteranimation8',
      frames: this[charArray[8]],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'characteranimation9',
      frames: this[charArray[9]],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'characteranimation10',
      frames: this[charArray[10]],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'characteranimation11',
      frames: this[charArray[11]],
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'characteranimation12',
      frames: this[charArray[12]],
      frameRate: 8,
      repeat: -1,
    });

    character0.anims.play('characteranimation0');
    character1.anims.play('characteranimation1');
    character2.anims.play('characteranimation2');
    character3.anims.play('characteranimation3');
    character4.anims.play('characteranimation4');
    character5.anims.play('characteranimation5');
    character6.anims.play('characteranimation6');
    character7.anims.play('characteranimation7');
    character8.anims.play('characteranimation8');
    character9.anims.play('characteranimation9');
    character10.anims.play('characteranimation10');
    character11.anims.play('characteranimation11');
    character12.anims.play('characteranimation12');
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
// Add 13 characters to the scene, randomly spread out without overlapping
// var characters = [];

// for (var i = 0; i < 13; i++) {
//   var character = new Phaser.Sprite({
//     key: 'character' + i,
//     x: 0,
//     y: 0,
//     src: 'assets/characters/character' + i + '.png'
//   });

//   // Check if the character can be placed at the current location
//   var canPlace = true;

//   for (var j = 0; j < characters.length; j++) {
//     if (characters[j].x === character.x && characters[j].y === character.y) {
//       canPlace = false;
//       break;
//     }
//   }

//   // If the character can be placed, add it to the scene
//   if (canPlace) {
//     characters.push(character);
//     mainScene.add(character);
//   }
// }
// Add 13 characters to the scene, randomly spread out on a grid of random size
// var width = Math.floor(Math.random() * 2) + 2;
// var height = Math.floor(Math.random() * 2) + 2;

// for (var i = 0; i < 13; i++) {
//   var character = new Phaser.Sprite({
//     key: 'character' + i,
//     x: Math.floor(Math.random() * game.width / width) * width,
//     y: Math.floor(Math.random() * game.height / height) * height,
//     src: 'assets/characters/character' + i + '.png'
//   });

//   mainScene.add(character);
// }
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
    'Elkeema',
    'CaptainNemo',
    'DejahThoris',
    'JohnCarter',
  ];
  var newChar = [];
  for (var i = 0; i < charArray.length; ) {
    var character = charArray[i];
    // var group;
    // group[i] = scene.add.group();
    // var rect = scene.add.rectangle(0, 0, 200, 450);
    // var color = Phaser.Display.Color.HexStringToColor('#000000').color;
    console.log(character);
    // rect.setStrokeStyle(2, color);
    window['character' + i] = new CharacterClass(
      scene,
      0,
      0,
      character,
      character + 'Idle_000.png'
    );

    // group[i].add(rect);
    // group[i].add(char);
    // i % 1 ? 20 : i * 100 + 20,
    // i % 2 ? newHeight / 2 + 20 : 20,
    window['character' + i].setScale(0.6);
    newChar.push(window['character' + i]);
    i++;
  }
  console.log('NEW CHAR ARRAY!!!!!!!', newChar);

  return newChar;
}
export default CharacterSelectionScene;
