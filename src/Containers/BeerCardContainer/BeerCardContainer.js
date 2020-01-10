import React, { Component } from 'react';
import { getBeerList } from '../../apiCalls';
import BeerCard from '../../Components/BeerCard/BeerCard'

class BeerCardContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    getBeerList()
      .then(data => console.log(data))
  }


}

export default BeerCardContainer;
