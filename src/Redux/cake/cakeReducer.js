const initialState = {
  numOfCakes: 10,
};

function cakeReducer(state= "numOfCakes", action) {
  switch (action.type) {
    case "BUY_CAKE": {
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    }
    default:
      return state;
  }
}

export default cakeReducer;
