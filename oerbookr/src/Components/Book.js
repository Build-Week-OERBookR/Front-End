import React from 'react';
import styled from 'styled-components';

const Book = (props) => {

    const  Img = styled.img `
    width: 10em;
    height: 10em;
    @media(max-width: 500px) {
        width: 50%;
        
    }
    
    `

    const Book = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    text-align: center;
    border: 1px solid black;
    border-radius: 12px;
    background-color: #D9B382;
    padding: 3%;
    margin: 1em;
    `
    const BookTop = styled.div `
    display: flex;
    justify-content: space-between;
    align-items:center;
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
                <Img src={props.image} alt={props.title} className="book-img"/>

            <div className="info">
                <h1 className="title">{props.title}</h1>
                <Publisher className="book-info">
                    <h6 className="tag">{props.tag}</h6>
                    <h6 className="publisher">{props.publisher}</h6>
                </Publisher>
                <h6 className="author">{props.authors
                .map(author => {
                    return author.name
                })}
                </h6>
            </div>

            </BookTop>
            
            <DescriptionContainer>
                <Description >{props.description}</Description>
            </DescriptionContainer>
            
        </Book>
    );
}

export default Book;
