export const setBeerList = beers => ({
  type: 'SET_BEER_LIST',
  beers
});

export const addFavorite = beer => ({
  type: 'ADD_FAVORITE',
  beer
});