import React, { Component } from 'react';
import { mapDispatchToProps } from '../../Containers/BeerCardContainer/BeerCardContainer';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    return (
      <form>
        <input 
        name='search'
        type='input'
        value={this.state.search}
        onChange={this.handleChange}
        />
      </form>
    )
  }
}


export default SearchForm
