
const initialState = {
    count: 0,
    displayedBalance: '0',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNT':
        return { ...state, count: state.count + 1 };
      case 'SET_DISPLAYED_BALANCE':
        return { ...state, displayedBalance: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  