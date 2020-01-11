export const beers = (state=[], action) => {
  switch(action.type) {
    case 'SET_BEER_LIST':
      return [...action.beers];
    default: 
      return state;
  }
}