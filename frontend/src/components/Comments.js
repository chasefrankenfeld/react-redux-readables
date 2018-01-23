import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { fetchPost, postUpVote, postDownVote } from '../actions';

class Comments extends Component {

  componentDidMount() {
    //   this.props.showPost(this.props.match.params.id)
  };

//   upVote = (id) => {
//     this.props.upVote(id)
//   }

//   downVote = (id) => {
//     this.props.downVote(id)
//   }

  render() {

    let { post } = this.props.post

    return (
        <div className="Posts">
            <div className="content-container post">            
                
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
//   showPost: (id) => dispatch(fetchPost(id)),
//   upVote: (id) => dispatch(postUpVote(id)),
//   downVote: (id) => dispatch(postDownVote(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
