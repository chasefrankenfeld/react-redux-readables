import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Posts from './Posts';
import Categories from './Categories';
import PostDetail from './PostDetail';
import Comments from './Comments';
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
        <Route exact path='/posts/:id' render={() =>
          <div>
            <PostDetail />
            <Comments />
          </div>
        } />

      </div>
    );
  }
};

export default App;
