import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)
    console.log(wrapper)
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
