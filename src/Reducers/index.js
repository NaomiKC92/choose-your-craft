import { combineReducers } from 'redux';
import { beers } from './BeerListReducer'
import { favorites } from './AddFavoriteReducer'

const rootReducer = combineReducers({
  beers,
  favorites
});

export default rootReducer;