const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';

const initialState = {
  gamePage: {
    isAnimation: false,
    activeCard: undefined,
  },
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIRST_NAME:
      return {
        ...state,
        firstName: action.fname,
      };

    default:
      return state;
  }
};

export const updateFirstName = (fname) => {
  gameReducer(null, { type: UPDATE_FIRST_NAME, fname });
};

export default gameReducer;
