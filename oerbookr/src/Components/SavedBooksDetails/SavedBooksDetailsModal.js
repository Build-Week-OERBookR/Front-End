import React, {useEffect}from 'react'
import styled from 'styled-components';
import SavedBooksDetailsCard from './SavedBooksDetailsCard';


function  SavedBooksDetailsModal({display, setDisplay, savedBooks}) {
    const modalDisplay = {
        'display': `${display ? 'block': 'none'}`
    }
    console.log(savedBooks)
    const handleDisplay = e =>{
        e.preventDefault()
        setDisplay(false);
    }
    console.log(savedBooks)
    return (
        <SavedBooksDetailsModalStyles style = {modalDisplay} >
            <p onClick={handleDisplay}>Close</p>
            {savedBooks.map((bookData, i) => <SavedBooksDetailsCard key={i} bookData={bookData}/>)}
            
        </SavedBooksDetailsModalStyles>
    )
}

export default SavedBooksDetailsModal;
const SavedBooksDetailsModalStyles = styled.div`
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0px;
        right: 0px;
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        padding: 50px -50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p{
            padding: 10px 30px;
            background:rgb(217,179,130);
            border-radius: 5px;
        }
`;

