import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions';
import Nav from './Nav';

class App extends Component {

  componentDidMount() {
      this.props.showAllPosts()
  };

  render() {

    let posts = Object.keys(this.props.posts).map((data)=>(this.props.posts[data]))

    return (
      <div className="App">
        {console.log(posts)}
        <Nav />
        <div>
          <ul>
            {posts.map((post) => 
              <li key="{post.id}">
                <p>{post.id}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (posts) => {
  return {
    posts
  }
};

const mapDispatchToProps = (dispatch) => ({
  showAllPosts: () => dispatch(fetchAllPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
