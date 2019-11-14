import React,{ useState, useEffect } from 'react';
import Book from './Book';
import styled from 'styled-components';
import axios from 'axios';

const BookList = (props) => {

    const Books = styled.div `
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
            axios
        .get('https://oer-bookr.herokuapp.com/api/books/')
        .then(res => {
            console.log(res)
            
        })
        .catch(err => {
            console.error(err);
        })

        }
        
        getBooks();
    }, [])
    return (
        <Books>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            
        </Books>
    );
}

export default BookList;
