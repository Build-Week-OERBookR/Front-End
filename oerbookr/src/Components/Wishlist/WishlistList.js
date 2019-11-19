import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import WishlistCard from './WishllistCard';
import SavedBooksDetailsModal from '../SavedBooksDetails/SavedBooksDetailsModal';


function WishlistList(props) {
    const [ display, setDisplay ] = useState(false);
    const [savedBooks, setSavedBooks]= useState([])
    useEffect(()=>{
    },[display])

    return (
        <>
            <WishlistListStyles>
            {/* {(props.wishList[0].books.length > 0 )&& console.log(props.wishList)} */}
                { (props.wishList.length > 0 ) && props.wishList[0].books.map( (wishlistData, i) => {
                console.log(wishlistData)
                return  <WishlistCard key={i}         
                     wishlistData= {wishlistData}
                    setDisplay={setDisplay}
                    display ={display}
                    setSavedBooks={setSavedBooks}
                    wishlistData = {wishlistData}
                    />}
                    )}
            </WishlistListStyles>
            <SavedBooksDetailsModal 
                display={display} 
                setDisplay={setDisplay}
                savedBooks = {savedBooks}
            />
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
    width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding: 20px 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    `;
