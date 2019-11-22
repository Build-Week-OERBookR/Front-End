import React, { useState, useEffect } from "react";

import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { get_book_id } from "./../action/loginAction";
import { addToWishlist } from "./../action/addToWishList";
import ReviewForm from "../Review/reviewForm";
import StarRatingComponent from "react-star-rating-component";


//styles
const Img = styled.img`
width: 18em;
height: 18em;
margin-right: 15%;
@media (max-width: 500px) {
  width: 100%;
  margin-right: 0%;
}
`;

const BookDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 80%;
text-align: center;
border: 1px solid black;
border-radius: 12px;
background-color: #d9b382;
padding: 3% 0%;
margin: 8% auto 0 auto;
@media (max-width: 800px) {
  width: 90%;
  margin: 20% auto 16% auto;
}
@media (max-width: 500px) {
  width: 90%;
  margin: 25% auto 0 auto;
}
`;
const BookTop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 3%;

@media (max-width: 500px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;
const Info = styled.div`
margin-right: 15%;
font-size: 1.4em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 500px) {
  margin-right: 0;
  padding-top: 1em;
}
`;
const Title = styled.h1`
font-size: 1.5em;
padding-bottom: 1em;
line-height: 1.4em;
@media (max-width: 500px) {
  padding-bottom: 0.5em;
}
`;
const Publisher = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
font-family: "Lato", sans-serif;
`;
const Authors = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
font-family: "Lato", sans-serif;
`;

const DescriptionContainer = styled.div`
width: 90%;
border: 1px solid black;
background-color: #d7d7d7;
margin-top: 1em;
padding: 2% 0%;
line-height: 1.6em;
font-weight: bold;
margin: 0 auto;
`;

const Description = styled.p`
width: 90%;
display: inline-block;
font-family: "Montserrat", sans-serif;
font-size: 1.2em;
`;
const Reviews = styled.div`
width: 80%;
margin: 1em auto;
font-family: "Montserrat", sans-serif;
background-color: #d7d7d7;
border: 1px solid black;
padding: 3%;
font-size: 1.2em;
font-weight: bold;
`;

const Review = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Username = styled.p`
font-family: "Lato", sans-serif;
border-bottom: 1px solid black;
width: 11%;
margin: 0 auto;
`;
const Buttons = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
margin: 0 auto;
`;
const Button = styled.button`
display: inline-block;
background-color: #7eafba;
color: #111;
height: 4.5em;
width: 9em;
font-weight: bold;
`;
const Delete = styled.button`
display: inline-block;
margin-top: 0.5em;
`;


const BookExpanded = props => {
  const [book, setBook] = useState({});
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    const id = props.match.params.id;
    const getBook = () => {
      axiosWithAuth()
        .get(`https://oer-bookr.herokuapp.com/api/books/${id}`)
        .then(res => {
          
          setBook(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getBook();
  }, [props.match.params.id]);

  const deleteReview = (e, id) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`https://oer-bookr.herokuapp.com/api/reviews/${id}`)
      .then(res => {
        window.location.reload();
      });
  };

  // const {thumbnail, title, tag,publisher,authors, description} = book;

  return (
    <div>
      <BookDiv>
        <BookTop>
          <Img src={book.thumbnail} alt={book.title} className="book-img" />
          <Info>
            <Title>{book.title}</Title>
            <Publisher className="book-info">
              <h6 className="tag">{book.tag}</h6>
              <h6 className="publisher">{book.publisher}</h6>
            </Publisher>
            <Authors>
              {book.authors &&
                book.authors.map(author => {
                  return <h6>{author.name}</h6>;
                })}
            </Authors>
          </Info>
        </BookTop>

        <DescriptionContainer>
          <Description>{book.description}</Description>
        </DescriptionContainer>

        <Reviews className="reviews">
          {book.reviews && book.reviews.length > 0 ? (
            book.reviews.map((item, i) => {
              return (
                <Review className="review">
                  <Username>{item.username}</Username>
                  <p>{item.review}</p>
                  <StarRatingComponent
                    name="bookRating"
                    editing={false}
                    starCount={5}
                    value={item.stars}
                  />
                  <Delete onClick={e => deleteReview(e, item.id)}>
                    Delete
                  </Delete>
                </Review>
              );
            })
          ) : (
            <h3>
              There are no reviews for this title, be the first to write one!
            </h3>
          )}
        </Reviews>
        <Buttons>
          <Button
            className="add"
            onClick={e => {
              e.preventDefault();
              props.get_book_id(parseInt(props.match.params.id));
              props.addToWishlist({
                user_id: parseInt(props.user_id),
                book_id: parseInt(props.match.params.id)
              });
            }}
          >
            Add To Wishlist
          </Button>
          <a target="_blank" href={book.access_link}>
            <Button className="add">Get This Book</Button>
          </a>
          <Button className="add" onClick={toggle}>Leave a review</Button>
          {console.log(book)}
          <ReviewForm 
            bookid={book.id} 
            modal ={modal}
            toggle ={toggle}
            setModal = {setModal}
          />
        </Buttons>
      </BookDiv>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user_id: state.idReducer.user_id,
    book_id: state.idReducer.book_id
  };
};
const mapDispatchToProps = {
  get_book_id,
  addToWishlist
};
export default connect(mapStateToProps, mapDispatchToProps)(BookExpanded);
