export const setBeerList = beers => ({
  type: 'SET_BEER_LIST',
  beers
});

export const addFavorite = beerId => ({
  type: 'ADD_FAVORITE',
  beerId
});

export const updateBeerList = beers => ({
  type: 'UPDATE_BEER_LIST',
  beers
});

export const search = value => ({
  type: 'SEARCH',
  value
});