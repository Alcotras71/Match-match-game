import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

const store = {
  state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: '35' },
        { id: 2, message: "It's my first post", likeCount: '20' },
        { id: 3, message: 'No, i dont want it', likeCount: '1' },
        { id: 4, message: 'Yo , Claire', likeCount: '5' },
      ],
      newPostText: 'No fish, no meat',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Dmitru' },
        { id: 3, name: 'Saha' },
        { id: 4, name: 'Rombol' },
        { id: 5, name: 'Kulik' },
        { id: 6, name: 'Sora' },
      ],
      messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'SO coool!' },
        { id: 5, message: 'clap, clap' },
        { id: 6, message: 'What is your web' },
      ],
      newMessageBody: '',
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Saga' },
        { id: 3, name: 'Redux' },
      ],
    },
  },
  subscriber() {
    console.log('no subscribers(observers');
  },
  getState() {
    return this.state;
  },
  subscribe(observer) {
    this.subscriber = observer;
  },

  dispatch(action) {
    this.state.profilePage = profileReducer(this.state.profilePage, action);
    this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action);
    this.state.sidebar = sidebarReducer(this.state.sidebar, action);

    this.subscriber(this.state);
  },
};

const arr = Object.keys(store);

for (let i = 0; i < arr.length; i += 1) {
  if (typeof store[i] === 'function') {
    store[i] = store[i].bind(store);
  }
}

export default store;
window.store = store;
