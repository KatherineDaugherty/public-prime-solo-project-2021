const typeReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TYPE':
        return action.payload;
      default:
        return state;
    }
  };
  

  export default typeReducer;
  