const initialState = {
  favourite: 0,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':

      return {
        ...state,
        favourite: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
