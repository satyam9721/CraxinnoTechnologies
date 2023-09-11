// actions.js
export const incrementCount = () => ({
    type: 'INCREMENT_COUNT',
  });
  
  export const setDisplayedBalance = (balance) => ({
    type: 'SET_DISPLAYED_BALANCE',
    payload: balance,
  });
  