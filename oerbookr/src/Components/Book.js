import React from 'react';
import styled from 'styled-components';

const Book = (props) => {

    const  Img = styled.img `
    width: 60%;
    margin-left: -15%;
    margin-right: 10%;
    @media(max-width: 500px) {
        width: 50%;
        margin-left: 0;
    }
    
    `

    const Book = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    text-align: center;
    border: 1px solid black;
    border-radius: 12px;
    background-color: #D9B382;
    padding: 3%;
    margin: 1em;

    @media(max-width: 500px) {
        width: 100%;
    }
    `
    const BookTop = styled.div `
    display: flex;
    justify-content: space-around;
    `
    const Publisher = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: 'Lato', sans-serif;
    `

    const DescriptionContainer = styled.div `
    width: 100%;
    border: 1px solid black;
    background-color: #D7D7D7;
    margin-top: 1em;
    `

    const Description = styled.p `
    width: 100%;
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    `

    return (
        <Book>
            <BookTop>
                <Img src="https://oercommons.s3.amazonaws.com/media/thumbnails/b0/32/b03210ea14718097860dc54cf75873b6.png" alt="Book Image" className="book-img"/>

            <div className="info">
                <h1 className="title">Title</h1>
                <Publisher className="book-info">
                    <h6 className="tag">Tag</h6>
                    <h6 className="publisher">Publisher</h6>
                </Publisher>
                <h6 className="author">Author</h6>
            </div>

            </BookTop>
            
            <DescriptionContainer>
                <Description >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptatum!</Description>
            </DescriptionContainer>
            
        </Book>
    );
}

export default Book;
