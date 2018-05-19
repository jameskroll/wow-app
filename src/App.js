import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Locale from './components/input/fields/Locale'
import { fetchPets } from './api/requests'

class App extends Component {
  render() {
    fetchPets()
    return (
      <div className="App">
       <Header/>
       <Locale/>
      </div>
    );
  }
}

export default App;
