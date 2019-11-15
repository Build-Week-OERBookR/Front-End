import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Book from '../Components/Book';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';

const BookExpanded = (props) => {


    const [book, setBook] = useState({});

    useEffect(() => {

        const id = props.match.params.id;
        const getBook = () => {
            axiosWithAuth().get(`https://oer-bookr.herokuapp.com/api/books/${id}`)
        .then(res => {
            console.log(res.data)
            setBook(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        console.log('hello')

        }
        getBook()
        
    }, []);

    const  Img = styled.img `
    width: 15em;
    height: 15em;
    margin-right: 15%;
    @media(max-width: 500px) {
        width: 100%;
        margin-right: 0%;
        
    }
    
    `

    const BookDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    text-align: center;
    border: 1px solid black;
    border-radius: 12px;
    background-color: #D9B382;
    padding: 3%;
    margin: 0 auto;
    @media(max-width: 500px) {
        width: 80%;
        
    }
    `
    const BookTop = styled.div `
    display: flex;
    justify-content: space-between;
    align-items:center;
    
    @media(max-width: 500px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    `
    const Info = styled.div`
    margin-right: 15%;
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
    const Buttons = styled.div `
    display: flex; 
    justify-content: space-between;
    width: 100%;
    `
    const Button = styled.button`
    display: inline-block;
    background-color: #7EAFBA;
    color: #111;
    height: 4em;
    width: 8em;
    font-weight: bold;
    `

 

    // const {thumbnail, title, tag,publisher,authors, description} = book;
    console.log(book);

    return (
      
        
           <BookDiv>
            <BookTop>
                <Img src={book.thumbnail} alt={book.title} className="book-img"/>

            <Info >
                <h1 className="title">{book.title}</h1>
                <Publisher className="book-info">
                    <h6 className="tag">{book.tag}</h6>
                    <h6 className="publisher">{book.publisher}</h6>
                </Publisher>
                {book.authors && book.authors.map(author => {
                    return <h6>{author.name}</h6>
                })}
                
            </Info>

            </BookTop>
            
            <DescriptionContainer>
                <Description >{book.description}</Description>
            </DescriptionContainer>

            <div className="reviews">
                {book.reviews && book.reviews.map((item,i) => {
                    
                        return (
                            <div className="review">
                                   <p>{item.username}</p>
                           <p>{item.review}</p>
                           <p>{item.stars}</p>
                            </div>
                           )
                       
                       
                    
                    })}
                    
            </div>

            <Buttons className="bookExpandedButtons">
                <Button className="add">Add To Wishlist</Button>
                <Button className="add">Leave a review</Button>
            </Buttons>
            
        </BookDiv>
            
        
        
    );
}

export default BookExpanded;
