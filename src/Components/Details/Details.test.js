import React from 'react';
import { shallow } from 'enzyme';
import Details from './Details'
import { mapStateToProps } from './Details'

describe('Details', () => {
  let wrapper
  beforeEach = () => {
    wrapper = shallow(<Details />)
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