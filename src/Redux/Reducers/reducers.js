const initialState = {
  favourite: 0,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return {
        ...state,
        favourite: state.favourite + 1,
      };

    default:
      return state;
  }
};

export default reducers;
