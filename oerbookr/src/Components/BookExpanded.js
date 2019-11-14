import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

const BookExpanded = (props) => {

    const [book, setBook] =useState();
    useEffect(() => {
        const id = props.match.params.id;
        axiosWithAuth()
        .get(`https://oer-bookr.herokuapp.com/api/books/${id}`)
        .then(res => {
            console.log(res)
            setBook(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    }, []);

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

    const {thumbnail, title, tag,publisher,authors, description} = book;

    return (
        <Book>
            <BookTop>
                <Img src={thumbnail} alt={title} className="book-img"/>

            <div className="info">
                <h1 className="title">{title}</h1>
                <Publisher className="book-info">
                    <h6 className="tag">{tag}</h6>
                    <h6 className="publisher">{publisher}</h6>
                </Publisher>
                {/* <h6 className="author">{authors
                .map(author => {
                    return author.name
                })}
                </h6> */}
            </div>

            </BookTop>
            
            <DescriptionContainer>
                <Description >{description}</Description>
            </DescriptionContainer>
            
        </Book>

        
    );
}

export default BookExpanded;
