import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Posts from './Posts';
import Categories from './Categories';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path='/' render={() =>
          <div>
            <Nav />
            <Categories />
            <Posts />
          </div>
        } />
        <Route exact path='/react' render={() =>
          <div>
            <Categories />
            <Posts />
          </div>
        } />

      </div>
    );
  }
};

export default App;
