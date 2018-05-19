import React, { Component } from 'react';
import './App.css';
import Locale from './components/input/fields/Locale'
import { fetchPets } from './api/requests'

class App extends Component {
  render() {
    fetchPets()
    return (
      <div className="App">
       <Locale/>
      </div>
    );
  }
}

export default App;
