import React from 'react'
import styled from 'styled-components';
function WishlistCard({wishlistData}) {
    return (

            <WishListCardStyles>
                <h3>User: {wishlistData.name}</h3>  
                <ul>
                    <h4>Saved books</h4>
                    {wishlistData.books.map( (book, i) =><li key={i}>{book.title}</li> )}
                </ul>
            </WishListCardStyles>
    )
}

export default WishlistCard

const WishListCardStyles = styled.div`
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
    height: 100%;
    width: 400px;
    padding: 10px 20px;
    margin-bottom: 15px;
    background-color:rgb(217, 179, 130);
    ul h4{
        font-weight: bold;
    }
    ul li{
        list-style-type: none;
        font-weight: 500;
        font-size: 1rem;
        line-height: 23px;
    }
`
