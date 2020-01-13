import React from 'react';
import { shallow } from 'enzyme';
import Details from './Details'
import { mapStateToProps } from './Details'

describe('Details', () => {
  let wrapper, mockBeers
  beforeEach = () => {
    wrapper = shallow(<Details />);
    mockBeers = [{id:3, name: 'Pilsner', isFavorited: false}, {id:6, name: 'Lager', isFavorited: false}, {id:7, name: 'PaleAle', isFavorited: false}, ]
  };

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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