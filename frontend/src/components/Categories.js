import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCategories } from '../utils/api';

class Categories extends Component {

    componentDidMount() {
        this.props.showAllCategories()
    }

    render() {
        return (
            <div>
                {console.log(this.props.categories)}
            </div>
        )
    }
};



const mapStateToProps = (categories) => {
    return {
        categories
    }
};
  
const mapDispatchToProps = (dispatch) => ({
    showAllCategories: () => dispatch(fetchAllCategories())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Categories);