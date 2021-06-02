import './Main.scss';
import BaseComponent from '../BaseComponent';
import AboutGame from './AboutGame/AboutGame';
import Game from './GamePage/Game';

export default class Main extends BaseComponent {
  private readonly game: Game;

  private readonly aboutGame: AboutGame;

  constructor() {
    super('main', ['main']);
    this.game = new Game();
    this.aboutGame = new AboutGame();
    this.element.appendChild(this.game.element);
    this.element.appendChild(this.aboutGame.element);
  }
}
