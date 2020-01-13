import { favorites } from './AddFavoriteReducer';

describe('Add Favorites Reducer', () => {

  it('should return an empty array when default is called', () => {
    expect(favorites(undefined, { type: 'none'})).toEqual([])
  });

//   it('should return an array of favorites when action is ADD_FAVORITE', () => {
//     const id = 3;

//     const action = {
//       type: 'ADD_FAVORITE',
//       id
//     }

//     const result = favorites([], action);

//     const expected = [ {id: 3} ]

//     expect(result).toEqual(expected)
// })

});



