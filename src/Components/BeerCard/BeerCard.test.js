import React from 'react';
import { shallow } from 'enzyme';
import BeerCard from './BeerCard'

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

})