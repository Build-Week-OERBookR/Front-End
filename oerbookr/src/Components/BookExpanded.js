import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Book from '../Components/Book';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';
import {connect} from 'react-redux';
import {get_book_id} from './../action/loginAction'
import { addToWishlist } from './../action/addToWishList'

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
        }
        getBook()
        
    }, []);

    
    // const {thumbnail, title, tag,publisher,authors, description} = book;
    console.log(book);

    return (
      
        <div>
            <h1>Expanded Book</h1>
            <Book
            image={book.thumbnail}
            title={book.title}
            tag={book.tag}
            publisher={book.publisher}
            authors={book.authors}
            
            // this is an array
            description={book.description} />
            <div className="reviews">
                {console.log(book.reviews)}
                REVIEW SECTION WIP
            </div>

            <div className="bookExpandedButtons">
                <button className="add" onClick={(e)=>{
                    e.preventDefault();
                    props.get_book_id(parseInt(props.match.params.id));
                    props.addToWishlist({ 
                        user_id: parseInt(props.user_id), 
                        book_id: parseInt(props.match.params.id)})
                    console.log(props)
                }}>Add To Wishlist</button>
                <button className="add">Leave a review</button>
            </div>
        </div>
        
    );
}

const mapStateToProps = state => {
    console.log(state)
    return{
        user_id: state.idReducer.user_id,
        book_id: state.idReducer.book_id
    }
}
const mapDispatchToProps = {
    get_book_id,
    addToWishlist
}
export default connect(mapStateToProps, mapDispatchToProps)(BookExpanded)