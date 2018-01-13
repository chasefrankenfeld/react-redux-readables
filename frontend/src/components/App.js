import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as API from '../utils/api';
import { getAllPosts } from '../actions';
import Nav from './Nav';

class App extends Component {

  componentDidMount() {
    
    API.fetchAllPosts().then((data) => 
      this.props.showAllPosts(
        data.reduce((postsObject, item) => ({
          ...postsObject,
          [item.id]: item
        }),{})
      )
    )

  };

  render() {
    return (
      <div className="App">
        <Nav />
        <div>
          {console.log(this.props.posts)}
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
