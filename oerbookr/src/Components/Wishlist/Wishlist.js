import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchAllID, fetchWishListData } from './../../action/addToWishList';

function Wishlist(props) {
    useEffect(() => {
        props.fetchAllID();
       
        // write a clean up function and subscribe to allId from state 
        // make a call to the  props.fetchWishListData() pass in the allId
        // Loop through and make api calls and save the result to state of wishlistdata
    },[]);

    useEffect(()=>{
        // if there are elements in the allid array then we run the fetchWishListData action creatot
        (props.allId.data.length > 1) && props.fetchWishListData(props.allId.data);
    })
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
export default connect(
        mapStateToProps, 
        //mapDisPatchToProps
        {
            fetchAllID,
            fetchWishListData
        }
        )(Wishlist)
