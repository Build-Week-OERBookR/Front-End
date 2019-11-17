import React from 'react';
import styled from "styled-components";

function SavedBooksDetailsCard({bookData}) {
    console.log(bookData)
    return (
        <SavedBooksDetailsCardStyles>
            <div className='image'>
                <img src={bookData.thumbnail} alt={bookData.thumbnail}/>
            </div>
            <div className='details'>

            </div>
            <div className='review'></div>
        </SavedBooksDetailsCardStyles>
    )
}

export default SavedBooksDetailsCard

const SavedBooksDetailsCardStyles = styled.div`
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
    width: 90%;
    margin: 20px auto;
    background: rgb(217,179,130);
    height: 200px;
    opacity: 1;
    .image{
        width: 25%;
        padding: 10px 0px 10px 10px;
        display: flex;
        justify-content: center;
        align-self: center;
    }
    img{
        width: 100%;
        height: 100%
    }
`;