import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Img = styled.img`
width: 95%;
height: 17em;

@media (max-width: 500px) {
  width: 100%;
}
`;

const BookDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 95%;
flex-wrap: wrap;
text-align: center;
border: 1px solid black;
border-radius: 12px;
background-color: #d9b382;
padding: 3%;
margin: 1em auto 1em auto;
height: 100%;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
@media (max-width: 500px) {
  width: 100%;
  padding: 1%;
}
`;
const NullBook = styled.div`
display: none;
`;
const BookTop = styled.div`
// display: flex;
// justify-content: space-between;
// align-items: center;
`;
const Title = styled.div`
font-size: 1.6em;
font-weight: bold;
@media (max-width: 500px) {
  font-size: 1em;
}
`;
const Publisher = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
font-family: "Lato", sans-serif;

h6 {
  margin: 0 0.9em;
}
`;
const Authors = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
font-family: "Lato", sans-serif;
font-size: 1.2em;

h6 {
  margin: 0 0.9em;
}
`;

const DescriptionContainer = styled.div`
border: 1px solid black;
background-color: #d7d7d7;
margin-top: 1em;
max-height: 12em;
overflow-y: scroll;
box-sizing: content-box;
@media (max-width: 500px) {
  max-height: 15em;
}
`;

const Description = styled.p`
display: inline-block;
font-family: "Montserrat", sans-serif;
`;

//component
const Book = props => {
    const navLinkStyles = {
        width: '45%',
        textDecoration: 'none'
    }
  if (props.image === null) {
    return (
      <NullBook>
        <Title>Oops! An error has occured here!</Title>
      </NullBook>
    );
  }

  return (
    <NavLink className="NavLink" to={`/books/${props.id}`} style={navLinkStyles}>
      <BookDiv>
        <BookTop>
          <Img src={props.image} alt={props.title} className="book-img" />

          <div className="info">
            <Title className="title">{props.title}</Title>
            <Publisher className="book-info">
              <h6 className="tag">Category: {props.tag}</h6>
              <h6 className="publisher">Publisher: {props.publisher}</h6>
            </Publisher>
            <h5>Authors</h5>
            <Authors>
              {props.authors &&
                props.authors.map(author => {
                  return <h6 key={author.name}>{author.name}</h6>;
                })}
            </Authors>
          </div>
        </BookTop>

        <DescriptionContainer>
          <Description>{props.description}</Description>
        </DescriptionContainer>
      </BookDiv>
    </NavLink>
  );
};

export default Book;
