import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link  } from 'react-router-dom';

const BookExpanded = (props) => {

    
    const [book, setBook] = useState({});

    useEffect(() => {

        const id = props.match.params.id;
        const getBook = () => {
            axiosWithAuth().get(`https://oer-bookr.herokuapp.com/api/books/${id}`)
        .then(res => {
            // console.log(res.data)
            setBook(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
        

        }
        getBook()
        
    }, [props.match.params.id]);

    const  Img = styled.img `
    width: 18em;
    height: 18em;
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
    width: 75%;
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
    font-size: 1.4em;
    `
    const Title = styled.h1 `
    
    `
    const Publisher = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: 'Lato', sans-serif;
    `
    const Authors = styled.div `
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    font-family: 'Lato', sans-serif;
    `

    const DescriptionContainer = styled.div `
    width: 100%;
    border: 1px solid black;
    background-color: #D7D7D7;
    margin-top: 1em;
    padding: 2%;
    line-height: 1.6em;
    font-weight: bold;
    `

    const Description = styled.p `
    width: 100%;
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2em;
    `
    const Reviews = styled.div `
    width: 80%;
    margin: 1em auto;
    font-family: 'Montserrat', sans-serif;
    background-color: #D7D7D7;
    border: 1px solid black;
    padding: 3%;
    font-size: 1.2em;
    font-weight: bold;
    `
    const Username = styled.p `
    font-family: 'Lato', sans-serif;
    border-bottom: 1px solid black;
    width: 11%; 
    margin: 0 auto; 
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
    height: 4.5em;
    width: 9em;
    font-weight: bold;
    `

 

    // const {thumbnail, title, tag,publisher,authors, description} = book;
  

    return (
      
        
           <BookDiv>
            <BookTop>
                <Img src={book.thumbnail} alt={book.title} className="book-img"/>

            <Info >
                <Title>{book.title}</Title>
                <Publisher className="book-info">
                    <h6 className="tag">{book.tag}</h6>
                    <h6 className="publisher">{book.publisher}</h6>
                </Publisher>
                <Authors>
                    {book.authors && book.authors.map(author => {
                        return <h6>{author.name}</h6>
                    })}
                </Authors>
               
                
            </Info>

            </BookTop>
            
            <DescriptionContainer>
                <Description >{book.description}</Description>
            </DescriptionContainer>

            <Reviews className="reviews">

                {
                    book.reviews && book.reviews.length > 0 ? book.reviews.map((item,i) => {
                    
                        return (
                            <div className="review">
                                <Username>{item.username}</Username>
                                <p>{item.review}</p>
                                <p>{item.stars}</p>
                            </div>
                           )
                       
                       
                    
                    }) : <h3>There are no reviews for this title, be the first to write one!</h3>
                }
              
                    
            </Reviews>

            <Buttons className="bookExpandedButtons">
                <Button className="add">Add To Wishlist</Button>
               <a target='_blank' href={book.access_link}><Button className="add">Get This Book</Button></a>
                <Button className="add">Leave a review</Button>
            </Buttons>
            
        </BookDiv>
            
        
        
    );
}

export default BookExpanded;
