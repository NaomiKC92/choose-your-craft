import React from 'react';
import { shallow } from 'enzyme';
import { Details, mapStateToProps } from './Details'

//23, 24, 28, 29, 42

describe('Details', () => {
  let wrapper, mockBeers
  beforeEach(() => {
    mockBeers = [
      {id: 3, name: 'Pilsner', tagline: 'Drink the beer', abv: 8.9, srm: 5, first_brewed: '04/18', description: 'Makes you feel funny', ingredients: ['Malt', 'Hops'], food_pairing: ['Oysters']},
      {id: 6, name: 'Pilsner', tagline: 'Drink the beer', abv: 8.9, srm: 5, first_brewed: '04/18', description: 'Makes you feel funny', ingredients: ['Malt', 'Hops'], food_pairing: ['Oysters']}
    ]
    const mockMatch = {
        params: {
          id: 3
        }
      }
    wrapper = shallow(<Details beers={mockBeers} match={mockMatch}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update local state when updateBeer is called', () => {  
    const initialState = {
      name: "",
      tagline: "",
      abv: "",
      srm: "",
      first_brewed: "",
      description: "",
      ingredients: "",
      food_pairing: ""
    }

    const mockBeer = {
      name: 'Pilsner', 
      tagline: 'Drink the beer', 
      abv: 8.9, 
      srm: 5, 
      first_brewed: '04/18', 
      description: 'Makes you feel funny', 
      ingredients: ['Malt', 'Hops'], 
      food_pairing: ['Oysters']
    }

    wrapper.setState(initialState)
    wrapper.instance().updateBeer(mockBeer)
    expect(wrapper.state()).toEqual(mockBeer)
  });

  describe('mapStateToProps', () => {
    it('should return an object with the beers data', () => {
      const mockState = {
        filter: 'SHOW_ALL',
        beers: [
          {id:3, name: 'Pilsner', isFavorited: false}
        ]
      }

      const expected = {
        beers: [
          {id:3, name: 'Pilsner', isFavorited: false}
        ]
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
    });
  });

});