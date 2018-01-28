import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllPosts, newPost, postUpVote, postDownVote } from '../actions';
import FaComment from 'react-icons/lib/fa/comment';

class Posts extends Component {

  state = {
    sortByVoteScoreRank: false,
    sortByTimestamp: false,
    postAuthor: "",
    postTitle: "",
    postText: "",
    postCategoryValue: "",
    editForm: false
  }

  componentDidMount() {
      this.props.showAllPosts()
  };

  sortByVoteScoreRank = () => this.setState({
    sortByVoteScoreRank: true,
    sortByTimestamp: false
  })

  sortByTimestamp = () => this.setState({
    sortByTimestamp: true,
    sortByVoteScoreRank: false
  })

  upVote = (id) => {
    this.props.upVote(id)
  }

  downVote = (id) => {
    this.props.downVote(id)
  }

  handlePostAuthor = (event) => {
    this.setState({
      postAuthor: event.target.value
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

  handlePostCategory = (event) => {
    this.setState({
      postCategoryValue: event.target.value
    })
  }

  submitNewPost = () => {
    if (this.state.postAuthor 
        && this.state.postTitle 
        && this.state.postText 
        && this.state.postCategoryValue) {
          this.props.newPost(
            Math.floor((Math.random() * 100000000000) + 1),
            Date.now(),
            this.state.postTitle,
            this.state.postText,
            this.state.postAuthor,
            this.state.postCategoryValue
          ).then(() => this.setState({
            postTitle: "",
            postText: "",
            postAuthor: "",
            postCategoryValue: ""
          })).then(() => this.props.showAllPosts())
        }
  }

  render() {

    let { posts } = this.props.posts
    if ( this.props.match.params.category && posts ) {
      posts = posts.filter((post) => post.category === this.props.match.params.category )
    }

    let { categories } = this.props.categories

    // This has an error where posts scores are equal
    if ( this.state.sortByVoteScoreRank === true && posts ) {
      const voteScoreRank = posts && posts.map((post) => post.voteScore).sort().reverse()
      let sortedPostsByVoteScore = []
      voteScoreRank.forEach((voteScore) => {
        posts.forEach((postObj) => {
          if ( voteScore === postObj.voteScore ) {
            sortedPostsByVoteScore.push(postObj)
          }
        })
      })
      posts = sortedPostsByVoteScore
    }

    // This has an error where posts timestamps are equal
    if ( this.state.sortByTimestamp && posts ) {
      const timestampRank = posts && posts.map((post) => post.timestamp).sort().reverse()
      let sortedPostsByTimestamp = []
      timestampRank.forEach((timestamp) => {
        posts.forEach((postObj) => {
          if ( timestamp === postObj.timestamp ) {
            sortedPostsByTimestamp.push(postObj)
          }
        })
      })
      posts = sortedPostsByTimestamp
    }

    return (
      <div className="Posts">
        <div className="content-container">
          <div className="section-name-text">
              <a className="section-nav-link sort" onClick={this.sortByVoteScoreRank}>Post Score</a>
              &nbsp;
              ·
              &nbsp;
              <a className="section-nav-link sort" onClick={this.sortByTimestamp}>Newest Post</a>
          </div>
        </div>

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
              onClick={() => 
                this.submitNewPost()
              }
            >Comment</button>
          </div>
        </div>

        {posts && posts.map((post) => 
            <div key={post.id} className="content-container post">            
              <div className="post-title">
                  <Link to={"posts/" + post.id} className="post-link">
                      {post.title}
                  </Link>
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

                <Link to={"posts/" + post.id} className="post-link post-action-button post-action-button-margin no-ul">
                    <FaComment className="icon-bubble"/>
                </Link>

                <a className="post-link post-action-button post-action-button-margin">
                  Edit
                </a>

              </div>

            </div>
          )}
      </div>
    );
  }
};

const mapStateToProps = ({posts, categories}) => {
  return {
    posts,
    categories
  }
};

const mapDispatchToProps = (dispatch) => ({
  showAllPosts: () => dispatch(fetchAllPosts()),
  newPost: (id, timestamp, title, body, author, category) => 
    dispatch(newPost(id, timestamp, title, body, author, category)),
  upVote: (id) => dispatch(postUpVote(id)),
  downVote: (id) => dispatch(postDownVote(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
