import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCategories } from '../actions';

class Categories extends Component {

    componentDidMount() {
        this.props.showAllCategories()
    };

    render() {

        const { categories } = this.props.categories

        return (
            <div>
                <div className="content-container">
                    <div className="section-name-text">
                        {categories && categories.map((category) => 
                            <span>
                                <a className="section-nav-link " href="#">{category.name}</a>
                                {console.log(categories[categories.length -1])}
                                { (category.name !== categories[categories.length -1].name) ? (
                                    <span>
                                        <span className="category-spacer-right">&nbsp;</span>
                                        <span>·</span>
                                        <span className="category-spacer-left">&nbsp;</span> 
                                    </span>
                                ) : (
                                    <span></span>
                                )
                                }
                            </span>
                        )}
                    </div>
                </div>
            </div>
        );
    }
};



const mapStateToProps = ({categories}) => {
    return {
        categories
    }
};
  
const mapDispatchToProps = (dispatch) => ({
    showAllCategories: () => dispatch(fetchAllCategories())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Categories);