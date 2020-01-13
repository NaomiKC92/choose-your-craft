import React from 'react';
import BeerCardContainer from '../../Containers/BeerCardContainer/BeerCardContainer'
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Details from '../Details/Details';
import SearchForm from '../SearchForm/SearchForm';

export const App = ({ beers }) => {
  return (
    <div className="App">
      <h1>Choose Your Craft</h1> 
      <Route exact path='/' component={BeerCardContainer} />
      <Route path='/beers/:id' component={Details}/>
    </div>
  );
}

export const mapStateToProps = state => ({
  beers: state.beers
});

export default connect(mapStateToProps)(App);
