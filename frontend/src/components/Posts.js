import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllPosts, postUpVote, postDownVote } from '../actions';
import FaComment from 'react-icons/lib/fa/comment';

class Posts extends Component {

  state = {
    sortByVoteScoreRank: false,
    sortByTimestamp: false
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

  render() {

    let { posts } = this.props.posts
    if ( this.props.match.params.category && posts ) {
      posts = posts.filter((post) => post.category === this.props.match.params.category )
    }

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

              </div>

            </div>
          )}
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
  showAllPosts: () => dispatch(fetchAllPosts()),
  upVote: (id) => dispatch(postUpVote(id)),
  downVote: (id) => dispatch(postDownVote(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
