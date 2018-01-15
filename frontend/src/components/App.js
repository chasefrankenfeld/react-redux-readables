import React, { Component } from 'react';
import Nav from './Nav';
import Posts from './Posts';
import Categories from './Categories';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Categories />
        <Posts />
      </div>
    );
  }
};

export default App;
