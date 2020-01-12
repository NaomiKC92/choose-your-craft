export const setBeerList = beers => ({
  type: 'SET_BEER_LIST',
  beers
});

export const addFavorite = beerId => ({
  type: 'ADD_FAVORITE',
  beerId
});