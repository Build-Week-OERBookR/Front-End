import React from "react";
import styled from "styled-components";

function WishlistCard({
  wishlistData
  //  setDisplay,
  //  display,
  //  setSavedBooks
}) {
//   console.log(wishlistData);
  // const handleDisplayModal = (e, books) => {
  //     e.preventDefault();

  //     setDisplay(!display)
  //     setSavedBooks(books)
  // }
  return (
    <WishListCardStyles>
      <div className="image">
        <img src={wishlistData.thumbnail} alt={wishlistData.thumbnail} />
      </div>
      <div className="details">
        <h3>
          <a href={wishlistData.access_link} target="_blank">
            {wishlistData.title}
          </a>
        </h3>
        <h6>
                by{" "}
                {wishlistData.authors.map(author => (
                <span key={author.id}>{author.name}</span>
                ))}
            </h6>
        <p className="avg-rating">Avg rating: {wishlistData.stars} </p>
        <p>
          <span> {wishlistData.license}</span>
        </p>
      </div>
      <div className="review"></div>
    </WishListCardStyles>
  );
}

export default WishlistCard;

const WishListCardStyles = styled.div`
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  width: 100%;
  margin: 30px auto;
  background: rgb(217, 179, 130);
  height: 150px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px;

  .image {
    width: 25%;
    padding: 10px 0px 10px 10px;
    display: flex;
    justify-content: center;
    align-self: center;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .details {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-self: center;
  }
  .details h3 a {
    text-decoration: none;
    color: #000000;
  }
`;
