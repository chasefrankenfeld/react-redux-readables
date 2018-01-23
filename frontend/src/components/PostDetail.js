import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost, postUpVote, postDownVote } from '../actions';

class PostDetails extends Component {

  componentDidMount() {
      this.props.showPost(this.props.match.params.id)
  };

  upVote = (id) => {
    this.props.upVote(id)
  }

  downVote = (id) => {
    this.props.downVote(id)
  }

  render() {

    let { post } = this.props.post

    return (
        <div className="Posts">
            {console.log(post)}
            {post && 
            <div key={post.id} className="content-container post">            
                <div className="post-title">
                    <p className="post-link">
                        {post.title}
                    </p>
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

                    <a className="post-link post-action-button" onClick={() => this.upVote(post.id)}>
                        <i className="icon reaction-icon icon-light icon-upvote"></i>
                    </a>


                    <a className="post-link post-action-button post-action-button-margin" onClick={() => this.downVote(post.id)}>
                        <i className="icon reaction-icon icon-light icon-downvote"></i>
                    </a>

                </div>
            </div>
            }
            <div className="comments-section comments-section-cta">
                <div className="content-container comments-title">
                        <p>Comments</p>
                </div>
            </div>
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
  showPost: (id) => dispatch(fetchPost(id)),
  upVote: (id) => dispatch(postUpVote(id)),
  downVote: (id) => dispatch(postDownVote(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));
