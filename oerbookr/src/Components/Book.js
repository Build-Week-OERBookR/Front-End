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

    const BookDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    text-align: center;
    border: 1px solid black;
    border-radius: 12px;
    background-color: #D9B382;
    padding: 3%;
    margin: 1em;
    height: 40em;
    media(max-width: 500px) {
        width: 100%;
        
    }
    `
    const BookTop = styled.div `
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    `
    const Title = styled.div `
    font-size: 1.4em;
    `
    const Publisher = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Lato', sans-serif;
    `
    const Authors = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    font-family: 'Lato', sans-serif;
    fonst-size: 1.2em;
    `

    const DescriptionContainer = styled.div `
    
    border: 1px solid black;
    background-color: #D7D7D7;
    margin-top: 1em;
    max-height: 12em;
    overflow-y: scroll;
    box-sizing: content-box; 
    `

    const Description = styled.p `
    
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    `
    if(props.image === null) {
        return (
            <BookDiv>
                <Title>Oops! An error has occured here!</Title>
            </BookDiv>
        )
    }
    
    return (
        <BookDiv>
            <BookTop>
                <Img src={props.image} alt={props.title} className="book-img"/>

            <div className="info">
                <Title className="title">{props.title}</Title>
                <Publisher className="book-info">
                    <h6 className="tag">{props.tag}</h6>
                    <h6 className="publisher">{props.publisher}</h6>
                </Publisher>
                <Authors>
                {props.authors && props.authors.map(author => {
                    return <h6>{author.name}</h6>
                })}
                </Authors>
                
                
            </div>

            </BookTop>
            
            <DescriptionContainer>
                <Description >{props.description}</Description>
            </DescriptionContainer>
            
        </BookDiv>
    );
}

export default Book;
