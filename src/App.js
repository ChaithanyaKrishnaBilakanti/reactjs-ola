import React, { Component } from 'react';
import Header from './Header';
import Bookola from './BookOla';
import Promotions from './Promotions';
import Cabtypes from './Cabtypes';
import Whyola from './WhyOla';
import OlaFleet from './OlaFleet';
import './App.css';
import './mycss.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Header />
        <Bookola />
        <Promotions />
        <Cabtypes />
        <Whyola />
        <OlaFleet />
      </div>
    );
  }
}

export default App;
