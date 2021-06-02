import Game from './Game';

export default class GameContainer {
  private readonly game: Game;

  constructor() {
    this.game = new Game();
  }
}
