import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchAllID } from './../../action/addToWishList';

function Wishlist(props) {
    console.log(props.allId);
    useEffect(() => {
       props.fetchAllID();

    }, [])
    return (
        <div>
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        allId: state.addToWishList.allId
    }
}
export default connect(mapStateToProps, {fetchAllID})(Wishlist)
