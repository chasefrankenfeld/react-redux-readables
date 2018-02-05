import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchEditPost } from '../actions/postsActions';

class PostForm extends Component {

    state = {
        postID: "",
        postAuthor: "",
        postTitle: "",
        postCategoryValue: "",
        postText: ""
    }

    componentDidMount() {
        const { post } = this.props.post
        this.setState({
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

    render() {

        const { categories } = this.props.categories

        return(
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
                        onClick={() => this.props.editPost(
                            this.state.postID,
                            this.state.postTitle,
                            this.state.postText
                        ).then(() => this.props.sumbitEditPost())}
                    >Post</button>
                </div>
            </div>
        )
    }
    
};

const mapStateToProps = ({ post, categories }) => {
    return {
        post,
        categories
    }
};

const mapDispatchToProps = (dispatch) => ({
    editPost: (id, title, body) => dispatch(fetchEditPost(id, title, body)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);