// import gameReducer from './gameReducer';
import aboutGameReducer from './aboutGameReducer';

let rerenderTree = () => {
  console.log('State changed');
};

const store = {
  state: {
    gamePage: {},
    aboutGamePage: {
      firstNameText: 'something',
    },
  },

  getState() {
    return this.state;
  },

  dispatch(action: { type: string }) {
    // this.state.gamePage = gameReducer(this.state.aboutPage, action);
    this.state.aboutGamePage = aboutGameReducer(this.state.gamePage, action);

    rerenderTree();
  },
};

export const subscribe = (observer) => {
  rerenderTree = observer;
};

const arr = Object.keys(store);

for (let i = 0; i < arr.length; i += 1) {
  if (typeof store[i] === 'function') {
    store[i] = store[i].bind(store);
  }
}

export default store;
window.store = store;
