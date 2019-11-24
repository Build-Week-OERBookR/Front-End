import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchAllID, fetchWishListData } from './../../action/addToWishList';
import WishlistList from './WishlistList';

function Wishlist(props) {
    useEffect(() => {
        props.fetchAllID();
    },[props]);

    useEffect(()=>{
        // if there are elements in the allid array then we run the fetchWishListData action creatot
        (props.allId.data.length > 1) && props.fetchWishListData(props.allId.data);
    })
    return (
        <div style= {{marginTop: '50px'}}>
            <WishlistList />
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
