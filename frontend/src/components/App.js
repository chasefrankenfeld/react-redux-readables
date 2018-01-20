import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Posts from './Posts';
import Categories from './Categories';
// import CategoryPosts from './CategoryPosts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path='/' render={() =>
          <div>
            <Categories />
            <Posts />
          </div>
        } />
        <Route exact path='/:category' render={() =>
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
