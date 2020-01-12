import React, { Component } from 'react';
import { beers } from '../../Reducers/BeerListReducer';
import { connect } from "react-redux"

class Details extends Component {
  state = { 
    name: "",
    tagline: "",
    abv: "",
    srm: "",
    first_brewed: "",
    description: "",
    ingredients: "",
    food_pairing: ""
  }

  componentDidMount() {
    const beer = this.findBeer(this.props.beers);
    this.updateBeer(beer);
  }

  findBeer = (beersList) => {
    return beersList.find(beer => {
      return beer.id === parseInt(this.props.match.params.id);
    })
  }

  updateBeer = (beer) => {
    this.setState({
      name: beer.name,
      tagline: beer.tagline,
      abv: beer.abv,
      srm: beer.srm,
      first_brewed: beer.first_brewed,
      description: beer.description,
      ingredients: beer.ingredients,
      food_pairing: beer.food_pairing
    })
  }

  render() {
    return (
      <section className='details-page'>
        <h2>{this.state.name}</h2>
        <p>{this.state.tagline}</p>
        <p>Abv: {this.state.abv}</p>
        <p>Srm: {this.state.srm}</p>
        <p>First brewed: {this.state.first_brewed}</p>
        <p>Description: {this.state.description}</p>
        {/* <p>Ingredients: {this.state.ingredients}</p>
        <p>Pairs well with: {this.state.food_pairing}</p> */}
      </section>
    )
  }
}

export const mapStateToProps = store => ({
  beers: store.beers
})

export default connect(mapStateToProps)(Details);