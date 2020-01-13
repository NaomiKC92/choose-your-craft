import React from 'react';
import { shallow } from 'enzyme';
import { BeerCardContainer, mapStateToProps, mapDispatchToProps } from '../../Containers/BeerCardContainer/BeerCardContainer'
import { setBeerList, addFavorite, updateBeerList } from '../../Actions';
import { getBeerList } from '../../apiCalls';

jest.mock('../../apiCalls.js')

describe('BeerCardContainer', () => {
  let wrapper
  beforeEach = () => {
    getBeerList.mockImplementation( () => {
      return Promise.resolve([{id:3, name: 'Pilsner', isFavorited: false}, {id:5, name: 'PaleAle', isFavorited: false}])
    });

    wrapper = shallow(<BeerCardContainer />)
  }

  xit('should call getBeerList when component mounts', () => {
    expect(getBeerList).toHaveBeenCalled()
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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