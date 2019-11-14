import React,{ useState, useEffect } from 'react';
import Book from './Book';
import styled from 'styled-components';
import axios from 'axios';

const BookList = (props) => {
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
        <div>
            <Book />
            
        </div>
    );
}

export default BookList;
