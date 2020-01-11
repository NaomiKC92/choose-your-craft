import React from 'react';
import BeerCardContainer from '../../Containers/BeerCardContainer/BeerCardContainer'
import './App.css';
import { Route } from 'react-router-dom';
import BeerCard from '../BeerCard/BeerCard';
import { connect } from 'react-redux'

export const App = ({ beers }) => {
  return (
    <div className="App">
     <h1>CRAFT</h1>
     <Route exact path='/' component={BeerCardContainer} />
     <Route path='/beer/:id' render={({ match }) => {
       const beer = beers.find(beer => beer.id === +(match.params.id));
       return <BeerCard {...beer}/>
     }} />
    </div>
  );
}

export const mapStateToProps = state => ({
  beers: state.beers
})

export default connect(mapStateToProps)(App);
