import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import WishlistCard from './WishllistCard';


function WishlistList(props) {
    return (
        <WishlistListStyles>
            {props.wishList.map( (wishlistData, i) =>  <WishlistCard key={i} wishlistData= {wishlistData}/>
            )}
        </WishlistListStyles>
    )
}
const mapStateToProps = state => {
    return {
        wishList: state.addToWishList.data
    }
}
export default connect(mapStateToProps, {})(WishlistList)

const WishlistListStyles = styled.div`
    width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding: 20px 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    `;
