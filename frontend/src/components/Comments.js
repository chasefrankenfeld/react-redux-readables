import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
    fetchPostComments, 
    commentUpVote, 
    commentDownVote,
    newComment,
    fetchPost,
    deleteComment 
} from '../actions';

import * as API from '../utils/api';

class Comments extends Component {

    state = {
        commentAuthor: "",
        commentInput: "",
    }

    componentDidMount() {
        this.props.showComments(this.props.match.params.id)
        this.props.showPost(this.props.match.params.id)
    };

    upVote = (id) => {
        this.props.upVote(id)
    }

    downVote = (id) => {
        this.props.downVote(id)
    }

    handleCommentAuthor = (event) => {
        this.setState({
            commentAuthor: event.target.value
        })
    }

    handleCommentInput = (event) => {
        this.setState({
            commentInput: event.target.value
        })
    }

    submitComment = () => {
        if (this.state.commentAuthor !== '' && this.state.commentInput !== '') {
            this.props.newComment(
                Math.floor((Math.random() * 100000000000) + 1),
                Date.now(),
                this.state.commentInput,
                this.state.commentAuthor,
                this.props.match.params.id
            )
            .then(() => this.setState({
                commentAuthor: "",
                commentInput: ""
            }))
            .then(() => 
                this.props.showComments(this.props.match.params.id) &&
                this.props.showPost(this.props.match.params.id)
            )
        }
    }

    deleteComment = (id) => {
        this.props.deleteComment(id)
    }

    render() {

    let { comments } = this.props.comments

    return (
        <div className="Comments">
            <div className="comments-section comments-section-cta">
                <div className="content-container comments-title">
                    <p>Comments</p>
                </div>
            </div>
            <div className="content-container post">
                <form>
                    <input
                        type="text"
                        className="comment-text-area comment-author"
                        placeholder="Name"
                        value={this.state.commentAuthor}
                        onChange={this.handleCommentAuthor}
                    />
                    <textarea 
                        className="comment-text-area"
                        placeholder="Share your thoughts..."
                        value={this.state.commentInput}
                        onChange={this.handleCommentInput}
                    />
                </form>
                <div className="comment-button-align">
                    <button 
                        className="comment-button" 
                        onClick={() => this.submitComment()}
                    >Comment</button>
                </div>
            </div>
            <div className="content-container post">
                {comments && comments.map((comment) =>
                <div key={comment.id} className="StaticComment comment">
                    <div className="comment-user">
                        <span className="dark">
                            {comment.author}
                        </span>

                        <span className="comment-time">
                            &nbsp;·&nbsp;
                            {comment.timestamp}
                        </span>
                        <span>
                            &nbsp;
                            |
                            &nbsp;
                        </span>
                        <span className="comment-vote">
                            Vote: {comment.voteScore}
                        </span> 

                    </div>

                    <div className="comment-body">
                        <p>{comment.body}</p>
                    </div>

                    <div className="info">
                        <a className="comment-action-button" onClick={() => this.upVote(comment.id)}>
                            <i className="icon reaction-icon icon-light icon-upvote"></i>
                        </a>
                        <span>
                            &nbsp;
                            |
                            &nbsp;
                        </span>
                        <a className="comment-action-button comment-action-button-margin"onClick={() => this.downVote(comment.id)}>
                            <i className="icon reaction-icon icon-light icon-downvote"></i>
                        </a>
                        <span>
                            &nbsp;
                            |
                            &nbsp;
                        </span>
                        <a className="comment-action-delete" onClick={() => this.deleteComment(comment.id)}>
                            &nbsp;
                            X
                            &nbsp;
                        </a>
                        
                    </div>
                 </div>
                )}
            </div>
        </div>
    );
  }
};

const mapStateToProps = ({comments, post}) => {
  return {
    comments,
    post
  }
};

const mapDispatchToProps = (dispatch) => ({
  showComments: (id) => dispatch(fetchPostComments(id)),
  upVote: (id) => dispatch(commentUpVote(id)),
  downVote: (id) => dispatch(commentDownVote(id)),
  newComment: (id, timestamp, body, author, parentId) => dispatch(newComment(id, timestamp, body, author, parentId)),
  showPost: (id) => dispatch(fetchPost(id)),
  deleteComment: (id) => dispatch(deleteComment(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
