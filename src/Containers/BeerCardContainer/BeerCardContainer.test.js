import React from 'react';
import { shallow } from 'enzyme';
import { setBeerList, addFavorite, updateBeerList } from '../../Actions';
import { getBeerList } from '../../apiCalls';
import { BeerCardContainer, mapDispatchToProps, mapStateToProps } from './BeerCardContainer'

jest.mock('../../apiCalls.js')

describe('BeerCardContainer', () => {
  let wrapper, mockBeers, mockFavorites, mockSetBeerList, mockAddFavorite, mockUpdateBeerList
  beforeEach( () => {
    mockBeers = [
      {id:3, name: 'Pilsner', isFavorited: false}, {id:5, name: 'PaleAle', isFavorited: false}
    ]
    mockFavorites = []
    mockSetBeerList = jest.fn();
    mockAddFavorite = jest.fn();
    mockUpdateBeerList = jest.fn();
    getBeerList.mockImplementation( () => {
      return Promise.resolve([{id:3, name: 'Pilsner', isFavorited: false}, {id:5, name: 'PaleAle', isFavorited: false}])
    });

    wrapper = shallow(<BeerCardContainer 
      beers={mockBeers}
      favorites={mockFavorites}
      setBeerList={mockSetBeerList}
      addFavorite={mockAddFavorite}
      updateBeerList={mockUpdateBeerList}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should call getBeerList when component mounts', () => {
    expect(getBeerList).toHaveBeenCalled()
  });

  it('should call setBeerList with beers array when getBeerList is called', () => {
    expect(mockSetBeerList).toHaveBeenCalled()

    expect(mockSetBeerList).toHaveBeenCalledWith(mockBeers)
  });


  describe('updateFavorites', () => {
    it('should call addFavorite when updateFavorites is called', () => {
      const mockBeer = {id:3, name: 'Pilsner', isFavorited: false}
      wrapper.instance().updateFavorites(mockBeer.id)

      expect(mockAddFavorite).toHaveBeenCalledWith(mockBeer.id)
    });

    it('should call updateBeerList when updateFavorites is called', () => {
      const mockBeer = {id:3, name: 'Pilsner', isFavorited: false}
      
      wrapper.instance().updateFavorites(mockBeer.id);

      expect(mockUpdateBeerList).toHaveBeenCalledWith(mockBeers);
    });
  });

  describe('showFavorites', () => {
    it('should call setBeerList when showFavorites is called', () => {
      wrapper.instance().showFavorites()

      expect(mockSetBeerList).toHaveBeenCalled()
    });
  });


  describe('mapStateToProps', () => {
    it('should return an object with the list of beers', () => {
      const mockState = {
        filter: 'SHOW_ALL',
        beers: [{id:3, name: 'Pilsner', isFavorited: false}]
      }
  
      const expected = {
        beers: [{id:3, name: 'Pilsner', isFavorited: false}]
      }
  
      const mappedProps = mapStateToProps(mockState)
  
      expect(mappedProps).toEqual(expected)
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with a setBeerList action when setBeerList is called', () => {

      const mockDispatch = jest.fn();
      const actionToDispatch = setBeerList([{id:3, name: 'Pilsner', isFavorited: false}]);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.setBeerList([{id:3, name: 'Pilsner', isFavorited: false}])

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with an addFavorite action when addFavorite is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addFavorite(3);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.addFavorite(3)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch with an updateBeerList action when updateBeerList is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateBeerList([{id:3, name: 'Pilsner', isFavorited: false}])
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.updateBeerList([{id:3, name: 'Pilsner', isFavorited: false}])

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

  });

});