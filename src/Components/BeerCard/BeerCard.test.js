import React from 'react';
import { shallow } from 'enzyme';
import { BeerCard, mapStateToProps } from './BeerCard';

describe('BeerCard', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<BeerCard />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should call updateFavorites when the beer icon is clicked', () => {
    const mockUpdateFavorites = jest.fn();
    const wrapper = shallow(<BeerCard updateFavorites={mockUpdateFavorites}/>);

    wrapper.find('.beer-icon').simulate('click');

    expect(mockUpdateFavorites).toHaveBeenCalled()
  })

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

    it('should return an object with favorites data', () => {
      const mockState = {
        filter: 'SHOW_ALL',
        favorites: [
          {id:3, name: 'Pilsner', isFavorited: false}
        ]
      }

      const expected = {
        favorites: [
          {id:3, name: 'Pilsner', isFavorited: false}
        ]
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)

    })

  })

})