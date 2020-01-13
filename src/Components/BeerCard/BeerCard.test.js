import React from 'react';
import { shallow } from 'enzyme';
import BeerCard from './BeerCard'

describe('BeerCard', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<BeerCard />);
    expect(wrapper).toMatchSnapshot();
  })

})