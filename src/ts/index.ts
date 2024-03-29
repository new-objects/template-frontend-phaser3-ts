import '../css/style.css';

import Phaser from 'phaser';
import Game from './scenes/Game';

export default new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  scene: Game,
});
