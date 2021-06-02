import './Header.scss';
import BaseComponent from '../BaseComponent';

export default class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);

    this.element.innerHTML = `
    <div class="header__wrapper">
      <div class="header__logo">Match <span>match</span></div>
      <ul class="header__menu">
        <a href="#">
          <li class="header__links">About Game</li>
        </a>
        <a href="#">
          <li class="header__links">Best Score</li>
        </a>
        <a href="#">
          <li class="header__links">Game Settings</li>
        </a>
      </ul>
      <div class="header__right-side">
        <a href="#">
          <div class="header__game">start game</div>
        </a>
        <div class="header__avatar">
          <img src="#" alt="avatar" />
        </div>
      </div>
    </div>
    `;
  }
}
