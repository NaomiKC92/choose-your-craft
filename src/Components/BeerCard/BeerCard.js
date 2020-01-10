import React from 'react';
import './BeerCard.scss';

const BeerCard = ({ id, name, abv, tagline, beerPic }) => {
  return (
    <div className='beer-card'>
      <img src={beerPic} />
      <h2>{name}</h2>
      <p className='tag-line'>{tagline}</p>
      <p className='abv'>{abv}</p>
      <button className='more-details-btn'>More Details...</button>
    </div>
  )
};

export default BeerCard