import React,{ useState, useEffect } from 'react';
import Book from './Book';
import styled from 'styled-components';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

const BookList = (props) => {

    const BooksDiv = styled.div `
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media(max-width: 500px) {
        flex-direction: column;
    }
    `
    
    const [books, updateBooks] = useState([]);
    useEffect(() => {
        const getBooks = () => {
            
            
            axiosWithAuth()
        .get(`https://oer-bookr.herokuapp.com/api/books/`)
        .then(res => {
            console.log(res)
            updateBooks(res.data)
            console.log(books)
            
        })
        .catch(err => {
            console.error(err);
        })

        axiosWithAuth().get(`https://oer-bookr.herokuapp.com/api/books/1`)
        .then(res => {
            console.log(res)
            
        })
        .catch(err => {
            console.log(err)
        })

        }

        
        
        getBooks();
    }, [])


    return (
        <BooksDiv>
            {
                books.map((book,i) => {
                    // console.log(book.title)
                    return (
                        <Link
                        key={i}
                         to={`/books/${book.id}`}>
                        <Book
                        key={i}
                        id={i}
                        image={book.thumbnail}
                        title={book.title}
                        tag={book.tag}
                        publisher={book.publisher}
                        authors={book.authors}
                        // this is an array
                        description={book.description}

                         />
                         </Link>
                         
                    )
                })
            }
            
        </BooksDiv>
    );
}

export default BookList;