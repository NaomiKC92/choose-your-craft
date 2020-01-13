import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  xit('should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return an object with the beers array', () => {
      const mockState = {
        beers: [{name: 'Trashy Blond', abv: 4.2}]
      }

    });
  });

});
