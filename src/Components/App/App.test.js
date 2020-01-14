import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { mapStateToProps } from './App'

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return an object with the beers array', () => {
      const mockState = {
        beers: [
          {name: 'Trashy Blond', abv: 4.2}
        ]
      }

      const expected = {
        beers: [
          {name: 'Trashy Blond', abv: 4.2}
        ]
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
    });
  });

});
