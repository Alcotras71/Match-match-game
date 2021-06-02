import Header from './components/Header/Header';
import Main from './components/Main/Main';

export default class App {
  private readonly header: Header;

  private readonly main: Main;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.main = new Main();
  }

  render(): void {
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.main.element);
  }
}
