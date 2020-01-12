import React, { Component } from 'react';
import { getBeerList } from '../../apiCalls';
import BeerCard from '../../Components/BeerCard/BeerCard';
import { setBeerList, addFavorite } from '../../Actions';
import { connect } from 'react-redux';

class BeerCardContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    getBeerList()
      .then(beers => {
        this.props.setBeerList(beers)
      })
  }

  render() {
    const beerCards = this.props.beers.map( beer => {
      return (
        <BeerCard
          id={beer.id}
          beerPic={beer.image_url}
          name={beer.name}
          abv={beer.abv}
          tagline={beer.tagline}
          key={beer.id}
          addFavorite={this.props.addFavorite}
        />
      )
    })

    return(
      <main>
        {beerCards}
      </main>
    )
  }
}


export const mapStateToProps = state => ({
  beers: state.beers,
  favorites: state.favorites
})

export const mapDispatchToProps = dispatch => ({
  setBeerList: (beers) => dispatch( setBeerList(beers)),
  addFavorite: (beer) => dispatch( addFavorite(beer))
})

export default connect(mapStateToProps, mapDispatchToProps)(BeerCardContainer);
