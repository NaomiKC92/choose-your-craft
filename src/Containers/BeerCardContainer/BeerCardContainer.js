import React, { Component } from 'react';
import { getBeerList } from '../../apiCalls';
import BeerCard from '../../Components/BeerCard/BeerCard';
import { setBeerList } from '../../Actions';
import { connect } from 'react-redux';

class BeerCardContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    getBeerList()
      .then(data => {
        this.props.setBeerList(data)
      })
  }

  render() {
    const beerCards = this.props.beers.map( beer => {
      console.log(beer)
      return (
        <BeerCard
          id={beer.id}
          beerPic={beer.image_url}
          name={beer.name}
          abv={beer.abv}
          tagline={beer.tagline}
          key={beer.id}
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
  beers: state.beers
})

export const mapDispatchToProps = dispatch => ({
  setBeerList: (beers) => dispatch( setBeerList(beers))
})

export default connect(mapStateToProps, mapDispatchToProps)(BeerCardContainer);
