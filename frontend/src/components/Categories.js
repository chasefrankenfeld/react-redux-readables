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
                        {console.log(categories)}
                        {categories.map((category) => 
                            <a className="section-nav-link " href="#">{category.name}</a>
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