import { beers } from './BeerListReducer';
import { exportAllDeclaration } from '@babel/types';

describe('Beer list reducer', () => {
  it('should return the initial state of an empty array', () => {
    expect(beers(undefined, {})).toEqual([])
  });

})