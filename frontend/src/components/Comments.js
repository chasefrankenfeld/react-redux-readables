import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
    fetchPostComments, 
    commentUpVote, 
    commentDownVote,
    newComment,
    fetchPost,
    fetchDeleteComment,
    fetchEditComment
} from '../actions';

class Comments extends Component {

    state = {
        commentId: "",
        commentAuthor: "",
        commentInput: "",
        editForm: false
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

    editComment = (comment) => {
        this.setState({
            commentId: comment.id,
            commentAuthor: comment.author,
            commentInput: comment.body,
            editForm: true
        })
    }

    postEditComment = () => {
        this.props.editComment(
            this.state.commentId,
            Date.now(),
            this.state.commentInput
        ).then(() =>
        this.setState({
            commentId: '',
            commentAuthor: '',
            commentInput: '',
            editForm: false
        }))

    }

    deleteComment = (id) => {
        this.props.deleteComment(id)
    }

    render() {

    const Timestamp = require('react-timestamp');

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
                        onClick={() => 
                            this.state.editForm 
                                ? this.postEditComment()
                                : this.submitComment()
                        }
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
                            <Timestamp 
                                time={comment.timestamp}
                                format="ago"
                            />
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
                        <a className="comment-action-delete" onClick={() => this.editComment(comment)}>
                            &nbsp;
                            Edit
                            &nbsp;
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
  deleteComment: (id) => dispatch(fetchDeleteComment(id)),
  editComment: (id, timestamp, body) => dispatch(fetchEditComment(id, timestamp, body))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
