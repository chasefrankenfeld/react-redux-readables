import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
    fetchPost, 
    postUpVote, 
    postDownVote, 
    fetchAllPosts, 
    fetchDeletedPost,
    fetchAllCategories,
    fetchEditPost
} from '../actions';

class PostDetails extends Component {

    state = {
        editForm: false,
        postID: "",
        postAuthor: "",
        postTitle: "",
        postCategoryValue: "",
        postText: ""
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
        postID: post.id,
        postAuthor: post.author,
        postTitle: post.title,
        postCategoryValue: post.category,
        postText: post.body
      })
  }

  handlePostTitle = (event) => {
    this.setState({
      postTitle: event.target.value
    })
  }

  handlePostText = (event) => {
    this.setState({
      postText: event.target.value
    })
  }


  sumbitEditPost = () => {
    this.props.editPost(
      this.state.postID,
      this.state.postTitle,
      this.state.postText
    ).then(() => this.setState({
      editForm: false,
      postID: "",
      postAuthor: "",
      postTitle: "",
      postCategoryValue: "",
      postText: ""
    }))
  }

  deletePost = (id) => {
    this.props.deletePost(id)
  }

  render() {

    const Timestamp = require('react-timestamp');

    let { post } = this.props.post
    const { categories } = this.props.categories

    return (
        <div className="Posts">
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
            <div className="content-container post">
                <form>
                    <div className="post-form-grid">
                        <div>
                        <input
                            type="text"
                            className="post-form post-form-author"
                            placeholder="Name"
                            value={this.state.postAuthor}
                            onChange={this.handlePostAuthor}
                        />
                        </div>
                        <div>
                        <input
                            type="text"
                            className="post-form post-form-title"
                            placeholder="Title"
                            value={this.state.postTitle}
                            onChange={this.handlePostTitle}
                        />
                        </div>
                        <select 
                        className="post-form post-form-categories"
                        value={this.state.postCategoryValue}
                        onChange={this.handlePostCategory}
                        >
                        <option value="">Select a category</option>
                        {categories && categories.map((category) => 
                            <option value={category.name} key={category.name}>{category.name}</option>
                        )}
                        </select>
                    </div>
                    <textarea 
                        className="post-form post-form-text-area"
                        placeholder="Share your thoughts..."
                        value={this.state.postText}
                        onChange={this.handlePostText}
                    />
                </form>
                <div className="post-form-button-align">
                    <button 
                        className="post-form-button" 
                        onClick={() => this.sumbitEditPost()}
                    >Post</button>
                </div>
            </div>
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
    editPost: (id, title, body) => dispatch(fetchEditPost(id, title, body)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));
