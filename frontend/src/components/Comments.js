import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPostComments, commentUpVote, commentDownVote } from '../actions';

class Comments extends Component {

  componentDidMount() {
      this.props.showComments(this.props.match.params.id)
  };

  upVote = (id) => {
    this.props.upVote(id)
  }

  downVote = (id) => {
    this.props.downVote(id)
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
                        
                    </div>
                 </div>
                )}
            </div>
        </div>
    );
  }
};

const mapStateToProps = ({comments}) => {
  return {
    comments
  }
};

const mapDispatchToProps = (dispatch) => ({
  showComments: (id) => dispatch(fetchPostComments(id)),
  upVote: (id) => dispatch(commentUpVote(id)),
  downVote: (id) => dispatch(commentDownVote(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
