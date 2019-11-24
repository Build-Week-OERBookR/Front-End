import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import WishlistCard from './WishllistCard';


function WishlistList(props) {
    const [ display, setDisplay ] = useState(false);
    useEffect(()=>{
    },[display])

    return (
        <>
            <WishlistListStyles>
                { (props.wishList.length > 0 ) && props.wishList[0].books.map( (wishlistData, i) => {
                return  <WishlistCard key={i}         
                     wishlistData= {wishlistData}
                    setDisplay={setDisplay}
                    display ={display}
                    />}
                    )}
            </WishlistListStyles>
        </>
    )
}
const mapStateToProps = state => {
    return {
        wishList: state.addToWishList.data
    }
}
export default connect(mapStateToProps, {})(WishlistList)

const WishlistListStyles = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding: 20px 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    `;
