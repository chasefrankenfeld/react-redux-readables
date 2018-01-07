import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as API from '../utils/api';
import { getAllPosts } from '../actions';
import Nav from './Nav';

class App extends Component {

  componentDidMount() {
    this.props.showAllPosts(API.getAllPosts())
  };

  render() {
    console.log('Props', this.props)
    return (
      <div className="App">
        <Nav />
        <div>
          <h1>Hello World!</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (posts) => {
  return ({
    posts
  })
};

const mapDispatchToProps = (dispatch) => ({
  showAllPosts: (posts) => dispatch(getAllPosts(posts))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
