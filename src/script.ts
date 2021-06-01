import './style.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const div = document.createElement('div');
div.appendChild(Header());
div.appendChild(Main());

document.querySelector('body').appendChild(div);
