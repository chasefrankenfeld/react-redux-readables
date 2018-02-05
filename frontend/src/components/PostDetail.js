import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { 
    fetchPost, 
    postUpVote, 
    postDownVote, 
    fetchAllPosts, 
    fetchDeletedPost,
} from '../actions/postsActions';
import { fetchAllCategories } from '../actions/categoryActions';
import PostForm from './PostForm'


class PostDetails extends Component {

    state = {
        redirect: false,
        editForm: false,
    }

  componentDidMount() {
    this.props.showPost(this.props.match.params.id)
    this.props.showAllPosts()
    this.props.showAllCategories()
  };

  upVote = (id) => {
    this.props.upVote(id)
  }

  downVote = (id) => {
    this.props.downVote(id)
  }

  editPost = (post) => {
      this.setState({
        editForm: true,
      })
  }

  sumbitEditPost = () => {
    this.setState({
        editForm: false,
    })
  }

  deletePost = (id) => {
    this.props.deletePost(id)
    this.setState({
        redirect: true
    })
  }

  render() {

    const Timestamp = require('react-timestamp');

    let { post } = this.props.post

    return (
        <div className="Posts">
            {(this.state.redirect || (post && post.deleted)) &&
                <Redirect to={"/"} />
            }
            {post && !this.state.editForm &&
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

                    <a className="post-link post-action-button post-action-button-margin" onClick={() => this.editPost(post)}>
                        Edit
                    </a>

                    <a className="post-link post-action-button post-action-button-margin" onClick={() => this.deletePost(post.id)}>
                        X
                    </a>

                </div>
            </div>
            }

            {post && this.state.editForm &&
                <PostForm sumbitEditPost={this.sumbitEditPost}/>
            }
        </div>
    );
  }
};

const mapStateToProps = ({post, categories}) => {
  return {
    post,
    categories
  }
};

const mapDispatchToProps = (dispatch) => ({
    showAllPosts: () => dispatch(fetchAllPosts()),
    showPost: (id) => dispatch(fetchPost(id)),
    upVote: (id) => dispatch(postUpVote(id)),
    downVote: (id) => dispatch(postDownVote(id)),
    deletePost: (id) => dispatch(fetchDeletedPost(id)),
    showAllCategories: () => dispatch(fetchAllCategories()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));
