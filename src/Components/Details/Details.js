import React, { Component } from 'react';
import { connect } from "react-redux"
import './Details.css'

export class Details extends Component {
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
  };

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
        <div className='details-card'>
          <h2 className='details-title'>{this.state.name}</h2>
          <p className='details-tagline'>{this.state.tagline}</p>
          <p className='details-abv'>Abv: {this.state.abv}</p>
          <p className='srm'>Srm: {this.state.srm}</p>
          <p className='first-brewed'>First brewed: {this.state.first_brewed}</p>
          <p className='description'>Description: {this.state.description}</p>
          {/* <p>Ingredients: {this.state.ingredients}</p>
          <p>Pairs well with: {this.state.food_pairing}</p> */}
        </div>
      </section>
    )
  }
}

export const mapStateToProps = store => ({
  beers: store.beers
})

export default connect(mapStateToProps)(Details);