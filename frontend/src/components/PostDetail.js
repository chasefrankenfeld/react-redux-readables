import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../actions';
import FaComment from 'react-icons/lib/fa/comment';

class PostDetails extends Component {

  componentDidMount() {
      this.props.showPost(this.props.match.params.id)
  };

  render() {

    // let { posts } = this.props.posts
    // if ( this.props.match.params.category && posts ) {
    //   posts = posts.filter((post) => post.category === this.props.match.params.category )
    // }

    return (
      <div className="Posts">
        {console.log(this.props.match.params)}
        {console.log(this.props.post)}
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

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));
