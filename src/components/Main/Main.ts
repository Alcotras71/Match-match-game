import AboutGame from './AboutGame/AboutGame';

const Main = () => {
  const mainWrapper = document.createElement('main');
  mainWrapper.classList.add('main');
  mainWrapper.innerHTML = `
    <div class="main__wrapper">
      ${AboutGame().outerHTML}
    </div>
  `;

  return mainWrapper;
};

export default Main;
