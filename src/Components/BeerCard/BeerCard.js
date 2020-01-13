import React from 'react';
import './BeerCard.css';
import { Link } from 'react-router-dom';
import beerIcon from '../../images/beer.svg';
import { favorites } from '../../Reducers/AddFavoriteReducer';
import { connect } from 'react-redux';

//import favorites form reducers
//const isFavorited = props
//import mapState
//conditionally rendering from there

export const BeerCard = ({ id, name, abv, tagline, beerPic, updateFavorites}) => { 
  return (
    <div className='beer-card'>
      <img src={beerPic} className='beer-pic'/>
      <div className='basic-info'>
        <h2>{name}</h2>
        <p className='tag-line'>{tagline}</p>
        <p className='abv'>Abv: {abv}</p>
      <div className='favorite-btn'>
        <Link to={`beers/${id}`} className='more-details-btn'>More Details</Link>
        {
        <img src={beerIcon} className='beer-icon not-favorited' onClick={() => updateFavorites(id)}/>}
      </div>
      </div>
    </div>
  )
};

export const mapStateToProps = state => ({
  beers: state.beers,
  favorites: state.favorites
});

export default connect(mapStateToProps)(BeerCard)