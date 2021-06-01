import './style.css';
import './components/Header/Header.css';
import './components/Main/AboutGame/AboutGame.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const div = document.createElement('div');
div.classList.add('wrapper');
div.innerHTML = `
  ${Header().outerHTML}
  ${Main().outerHTML}
`;

document.querySelector('body').appendChild(div);
