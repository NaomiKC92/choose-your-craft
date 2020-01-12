import React from 'react';
import './BeerCard.css';
import { Link } from 'react-router-dom';

const BeerCard = ({ id, name, abv, tagline, beerPic }) => {
  
  return (
    <div className='beer-card'>
      <img src={beerPic} className='beer-pic'/>
      <h2>{name}</h2>
      <p className='tag-line'>{tagline}</p>
      <p className='abv'>Abv: {abv}</p>
      <Link to={`beers/${id}`} className='more-details-btn'>More Details...</Link>
    </div>
  )
};

export default BeerCard