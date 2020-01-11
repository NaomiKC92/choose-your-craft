import { combineReducers } from 'redux';
import { beers } from './BeerListReducer'

const rootReducer = combineReducers({
  beers
});

export default rootReducer;