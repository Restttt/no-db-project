import React, { Component } from 'react';

import './App.css';

import SwansonWrapper from './components/swansonWrapper';
import Header from './components/header/header';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SwansonWrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
