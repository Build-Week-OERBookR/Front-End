import React, { useState, useEffect } from "react";
import Book from "./Book";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import "./BookList.css";

const BookList = props => {
  const BooksDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 120px;
    padding: 3% 0%;
    @media (max-width: 500px) {
      flex-direction: column;
    }
    `
    
    


  const [books, updateBooks] = useState([]);
  useEffect(() => {
    const getBooks = () => {
      axiosWithAuth()
        .get(`https://oer-bookr.herokuapp.com/api/books/`)
        .then(res => {
          updateBooks(res.data);
        })
        .catch(err => {
          console.error(err);
        });

      axiosWithAuth()
        .get(`https://oer-bookr.herokuapp.com/api/books/1`)
        .then(res => {
        })
        .catch(err => {
          console.log(err);
        });
    };
    getBooks();
  }, []);


  return (
    <BooksDiv>
      {books.map((book, i) => {
        return (
          <Book
            key={i}
            id={i + 1}
            image={book.thumbnail}
            title={book.title}
            tag={book.tag}
            publisher={book.publisher}
            authors={book.authors}
            // this is an array
            description={book.description}
          />
        );
      })}
    </BooksDiv>
  );
};

export default BookList;
