import './style.scss';
import App from './app';
import { subscribe } from './store/store';

window.onload = () => {
  const appElement = document.body;

  const rerender = () => {
    if (!appElement) throw Error('App root element not fount');
    new App(appElement).render();
  };

  rerender();

  subscribe(rerender);
};
