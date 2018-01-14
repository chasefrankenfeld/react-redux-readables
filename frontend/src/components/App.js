import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions';
import Nav from './Nav';

class App extends Component {

  componentDidMount() {
      this.props.showAllPosts()
  };

  render() {

    const posts = Object.keys(this.props.posts).map((data) => this.props.posts[data])

    return (
      <div className="App">
        {console.log(this.props.posts)}
        {console.log(Object.keys(this.props.posts).map((data) => this.props.posts[data]))}
        <Nav />
        <div className="content-container">
          <div className="section-name-text">
              <a className="section-nav-link active" href="/">Post Score</a>
              &nbsp;
              ·
              &nbsp;
              <a className="section-nav-link " href="#">New</a>
          </div>
        </div>
        {posts.map((posts) => posts.map((post) => 
            <div key="{post.id}" className="content-container post">
            {console.log(post.id)}
            
              <a className="post-background-link no-ul post-link" href="#"></a>

              <div className="post-title">
                  <a className="post-link" href="#">
                      {console.log(post.title)}
                      {post.title}
                  </a>
              </div>

              <div className="info">
                  <span className="post-link">
                      By                    
                      &nbsp;
                      ·
                      &nbsp;
                      {post.author}
                  </span> 
              </div>

              <div className="post-actions">

                <a className="SaveLink post-link post-action-button save-button">
                    <i className="icon reaction-icon icon-light icon-upvote"></i>
                    <span className="SaveText">
                        {post.voteScore}
                    </span>
                </a>

                <a className="post-link post-action-button post-action-button-margin no-ul" href="#">
                    <i className="icon reaction-icon icon-light icon-bubble"></i>
                    <span className="CommentText">
                    {post.commentCount}
                    </span>
                </a>

              </div>

            </div>
        ))}
      </div>
    );
  }
};

const mapStateToProps = (posts) => {
  return {
    posts
  }
};

const mapDispatchToProps = (dispatch) => ({
  showAllPosts: () => dispatch(fetchAllPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
