import React from 'react';
import './BeerCard.css';

const BeerCard = ({ id, name, abv, tagline, beerPic }) => {
  return (
    <div className='beer-card'>
      <img src={beerPic} className='beer-pic'/>
      <h2>{name}</h2>
      <p className='tag-line'>{tagline}</p>
      <p className='abv'>{abv}</p>
      <button className='more-details-btn'>More Details...</button>
    </div>
  )
};

export default BeerCard