import React,{ useState, useEffect } from 'react';
import Book from './Book';
import styled from 'styled-components';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const BookList = (props) => {

    const Books = styled.div `
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media(max-width: 500px) {
        flex-direction: column;
    }
    `
    let token = localStorage.getItem('token')
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

        }
        
        getBooks();
    }, [])
    return (
        <Books>
            {
                books.map((book,i) => {
                    console.log(book.title)
                    return (
                        <Book
                        key={i}
                        image={book.thumbnail}
                        title={book.title}
                        tag={book.tag}
                        publisher={book.publisher}
                        authors={book.authors}
                        // this is an array
                        description={book.description}

                         />
                    )
                })
            }
            
        </Books>
    );
}

export default BookList;
