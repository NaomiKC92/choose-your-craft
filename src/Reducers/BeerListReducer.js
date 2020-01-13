export const beers = (state=[], action) => {
  switch(action.type) {
    case 'SET_BEER_LIST':
      return action.beers.map(beer => {
        return {...beer, isFavorited: false}
      });
    case 'UPDATE_BEER_LIST':
      state = [...action.beers];
    default: 
      return state;
  }
}