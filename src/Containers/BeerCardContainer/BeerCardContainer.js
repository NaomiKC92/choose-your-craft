import React, { Component } from 'react';
import { getBeerList } from '../../apiCalls';
import BeerCard from '../../Components/BeerCard/BeerCard';
import { setBeerList, addFavorite, updateBeerList } from '../../Actions';
import { connect } from 'react-redux';
import SearchForm from '../../Components/SearchForm/SearchForm';
import './BeerCardContainer.css'


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

  updateFavorites = beerId => {
    this.props.addFavorite(beerId);
    const beerList = this.props.beers;
    this.props.favorites.forEach(favoriteId => {
      const index = beerList.findIndex(beer => beer.id === favoriteId);
      beerList[index].isFavorited = true
    })
    this.props.updateBeerList(beerList)
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
          updateFavorites={this.updateFavorites}
        />
      )
    })

    return(
      <main>
        {beerCards}
        <SearchForm />
      </main>
    )
  }
}


export const mapStateToProps = state => ({
  beers: state.beers,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  setBeerList: (beers) => dispatch( setBeerList(beers)),
  addFavorite: (beer) => dispatch( addFavorite(beer)),
  updateBeerList: (beers) => dispatch( updateBeerList(beers))
})

export default connect(mapStateToProps, mapDispatchToProps)(BeerCardContainer);
