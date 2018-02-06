import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Posts from './Posts';
import Categories from './Categories';
import PostDetail from './PostDetail';
import Comments from './Comments';
import ErrorMessage404 from './ErrorMessage404';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' render={() =>
            <div>
              <Categories />
              <Posts />
            </div>
          } />
          <Route exact path='/404error' render={() =>
            <div>
               <ErrorMessage404 />
            </div>
          } />
          <Route exact path='/:category' render={() =>
            <div>
              <Categories />
              <Posts />
            </div>
          } />
          <Route exact path='/:category/:id' render={() =>
            <div>
              <PostDetail />
              <Comments />
            </div>
          } />
        </Switch>
      </div>
    );
  }
};

export default App;
