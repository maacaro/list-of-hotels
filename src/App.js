import React, { Component } from 'react';
import SearchName from './components/search/searchName';
import logo from './logo.svg';
import './App.css';

const amenities= [
  'coffe-maker',
  'restaurant',
  'bathtub',
  'beach-pool-facilities',
  'separate-bredroom'
];
class App extends Component {
  render() {
    return (
      <SearchName/>
    );
  }
}

export default App;
