import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCategoryPosts } from '../actions';
import FaComment from 'react-icons/lib/fa/comment';

class CategoryPosts extends Component {

    componentDidMount() {
        this.props.showCategoryPosts(this.props.match.params.category)
    };

    render() {

        const { posts } = this.props.posts

        return (

            <div className="Posts">

                <div className="content-container">
                    <div className="section-name-text">
                        <a className="section-nav-link active" href="/">Post Score</a>
                        &nbsp;
                        ·
                        &nbsp;
                        <a className="section-nav-link " href="#">New</a>
                    </div>
                </div>

                {posts && posts.map((post) => {
                    <div className="content-container post">
                        <p>{post.title}</p>
                        <div key={post.id} className="content-container post">            
                            <a className="post-background-link no-ul post-link" href="#"></a>

                            <div className="post-title">
                                <a className="post-link" href="#">
                                    {post.title}
                                </a>
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

                                <a className="post-link post-action-button">
                                    <i className="icon reaction-icon icon-light icon-upvote"></i>
                                </a>


                                <a className="post-link post-action-button post-action-button-margin">
                                    <i className="icon reaction-icon icon-light icon-downvote"></i>
                                </a>

                                <a className="post-link post-action-button post-action-button-margin no-ul" href="#">
                                    <FaComment className="icon-bubble"/>
                                </a>

                            </div>

                        </div>
                    </div>
                })}
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
    showCategoryPosts: (category) => dispatch(fetchCategoryPosts(category))
})
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryPosts));