import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost, postUpVote, postDownVote, fetchAllPosts } from '../actions';

class PostDetails extends Component {

  componentDidMount() {
      this.props.showPost(this.props.match.params.id)
      this.props.showAllPosts()
  };

  upVote = (id) => {
    this.props.upVote(id)
  }

  downVote = (id) => {
    this.props.downVote(id)
  }

  render() {

    const Timestamp = require('react-timestamp');

    let { post } = this.props.post

    return (
        <div className="Posts">
            {post && 
            <div key={post.id} className="content-container post">            
                <div className="post-title">
                        {post.title}
                </div>

                <div className="post-body">
                    <p>{post.body}</p>
                </div>

                <div className="info">
                    <span className="post-link">
                        By                    
                        &nbsp;
                        ·
                        &nbsp;
                        {post.author}
                        &nbsp;
                        ·
                        &nbsp;
                        <Timestamp time={post.Timestamp} format="ago" />
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

                    <a className="post-link post-action-button" onClick={() => this.upVote(post.id)}>
                        <i className="icon reaction-icon icon-light icon-upvote"></i>
                    </a>

                    <a className="post-link post-action-button post-action-button-margin" onClick={() => this.downVote(post.id)}>
                        <i className="icon reaction-icon icon-light icon-downvote"></i>
                    </a>

                </div>
            </div>
            }
        </div>
    );
  }
};

const mapStateToProps = ({post}) => {
  return {
    post
  }
};

const mapDispatchToProps = (dispatch) => ({
    showAllPosts: () => dispatch(fetchAllPosts()),
    showPost: (id) => dispatch(fetchPost(id)),
    upVote: (id) => dispatch(postUpVote(id)),
    downVote: (id) => dispatch(postDownVote(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));
