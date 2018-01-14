import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions';
import FaComment from 'react-icons/lib/fa/comment';

class Posts extends Component {

  componentDidMount() {
      this.props.showAllPosts()
  };

  render() {

    const posts = Object.keys(this.props.posts).map((data) => this.props.posts[data])

    return (
      <div className="Posts">
        {console.log(this.props.posts)}
        {console.log(Object.keys(this.props.posts).map((data) => this.props.posts[data]))}
        <div className="content-container">
          <div className="section-name-text">
              <a className="section-nav-link active" href="/">Post Score</a>
              &nbsp;
              ·
              &nbsp;
              <a className="section-nav-link " href="#">New</a>
              &nbsp;
              ·
              &nbsp;
              <a className="section-nav-link " href="#">Categories</a>
          </div>
        </div>
        {posts.map(posts => posts.map((post) => 
            <div key="{post.id}" className="content-container post">            
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
                      &nbsp;
                      |
                      &nbsp;
                      Vote: {post.voteScore}
                      &nbsp;
                      |
                      &nbsp;
                      Comments: {post.commentCount}
                  </span> 
              </div>

              <div className="post-actions">

                <a className="post-link post-action-button">
                    <i className="icon reaction-icon icon-light icon-upvote"></i>
                </a>


                <a className="post-link post-action-button post-action-button-margin">
                    <i className="icon reaction-icon icon-light icon-downvote"></i>
                </a>

                <a className="post-link post-action-button post-action-button-margin no-ul" href="#">
                    <FaComment className="icon-bubble"/>
                </a>

              </div>

            </div>
        ))}
      </div>
    );
  }
};

const mapStateToProps = ({posts}) => {
  return {
    posts
  }
};

const mapDispatchToProps = (dispatch) => ({
  showAllPosts: () => dispatch(fetchAllPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
