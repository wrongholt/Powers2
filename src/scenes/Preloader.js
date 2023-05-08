import 'phaser';
import 'webfontloader';
import WebFontFile from '../helpers/webfont.js';
class BootScene extends Phaser.Scene {
  constructor(args) {
    super();
  }

  preload() {
    var arrayVideo = ['streets', 'sky'];
    var pickOne = arrayVideo[Math.floor(Math.random() * arrayVideo.length)];
    this.load.crossOrigin = 'Anonymous';
    this.load.addFile(
      new WebFontFile(this.load, ['Sedgwick Ave Display', 'Lato', 'Caveat'])
    );
    this.load.video(
      'background',
      'https://d1ofwchetll7ui.cloudfront.net/' + pickOne + '.mp4'
    );
    this.load.image(
      'logo',
      'https://d1ofwchetll7ui.cloudfront.net/powerslogo.png'
    );
    this.load.image(
      'button',
      'https://d1ofwchetll7ui.cloudfront.net/button.png'
    );

    this.load.image(
      'button_hover',
      'https://d1ofwchetll7ui.cloudfront.net/button_hover.png'
    );
    this.load.image(
      'CharityAvatar',
      'https://d1ofwchetll7ui.cloudfront.net/avatars/Charity.png'
    );
    this.load.image(
      'ArgusAvatar',
      'https://d1ofwchetll7ui.cloudfront.net/avatars/Argus.png'
    );
    this.load.image(
      'CaptainNemoAvatar',
      'https://d1ofwchetll7ui.cloudfront.net/avatars/CaptainNemo.png'
    );
    this.load.image(
      'DejahThorisAvatar',
      'https://d1ofwchetll7ui.cloudfront.net/avatars/DejahThoris.png'
    );
    this.load.image(
      'EdgeAvatar',
      'https://d1ofwchetll7ui.cloudfront.net/avatars/Edge.png'
    );
    this.load.image(
      'ElectricMeanAvatar',
      'https://d1ofwchetll7ui.cloudfront.net/avatars/ElectricMean.png'
    );
    this.load.image(
      'ElkeemaNemoAvatar',
      'https://d1ofwchetll7ui.cloudfront.net/avatars/Elkeema.png'
    );
    this.load.image(
      'JohnCarterAvatar',
      'https://d1ofwchetll7ui.cloudfront.net/avatars/JohnCarter.png'
    );
    this.load.image(
      'KarriganAvatar',
      'https://d1ofwchetll7ui.cloudfront.net/avatars/Karrigan.png'
    );
    this.load.image(
      'LarsThundersquatAvatar',
      'https://d1ofwchetll7ui.cloudfront.net/avatars/LarsThundersquat.png'
    );
    this.load.image(
      'LillithAvatar',
      'https://d1ofwchetll7ui.cloudfront.net/avatars/Lillith.png'
    );
    this.load.image(
      'RandellAvatar',
      'https://d1ofwchetll7ui.cloudfront.net/avatars/Randell.png'
    );
    this.load.image(
      'SharpySharpAvatar',
      'https://d1ofwchetll7ui.cloudfront.net/avatars/SharpySharp.png'
    );

    this.load.multiatlas(
      'Charity',
      'https://d1ofwchetll7ui.cloudfront.net/Charity.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'Argus',
      'https://d1ofwchetll7ui.cloudfront.net/Argus.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'CaptainNemo',
      'https://d1ofwchetll7ui.cloudfront.net/CaptainNemo.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'DejahThoris',
      'https://d1ofwchetll7ui.cloudfront.net/DejahThoris.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'Edge',
      'https://d1ofwchetll7ui.cloudfront.net/Edge.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'ElectricMean',
      'https://d1ofwchetll7ui.cloudfront.net/ElectricMean.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'Elkeema',
      'https://d1ofwchetll7ui.cloudfront.net/Elkeema.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'JohnCarter',
      'https://d1ofwchetll7ui.cloudfront.net/JohnCarter.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'Karrigan',
      'https://d1ofwchetll7ui.cloudfront.net/Karrigan.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'LarsThundersquat',
      'https://d1ofwchetll7ui.cloudfront.net/LarsThundersquat.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'Lillith',
      'https://d1ofwchetll7ui.cloudfront.net/Lillith.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'Randell',
      'https://d1ofwchetll7ui.cloudfront.net/Randell.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
    this.load.multiatlas(
      'SharpySharp',
      'https://d1ofwchetll7ui.cloudfront.net/SharpySharp.json',
      'https://d1ofwchetll7ui.cloudfront.net/'
    );
  }

  create() {
    this.scene.start('HomeScene');
  }
}

export default BootScene;
