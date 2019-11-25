import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import lecture2 from "../img/lecture2.jpg";
import axios from "axios";
const SplashPage = styled.div`
  padding: 100px 0%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
    @media (max-width: 800px){
        flex-wrap: wrap;
        width: 100%;
        padding: 100px 20px;
    }
  img {
    width: 50%;
    margin-right: 3%;

    @media (max-width: 800px) {
    display: none;
    }
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 2.4em;
  padding: 10px 0%;
  line-height: 1.3em;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-family: "Secular One", serif;
  @media (max-width: 500px) {
    font-size: 2em;
    width: 80%;
  }
`;
const H4 = styled.h4`
  font-size: 1.5em;
  padding: 2%;
  width: 95%;
  margin: 0 auto;
  font-family: "Lato", serif;
text-align: center;
  @media (max-width: 500px) {
    width: 70%;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  a {
    margin: 1em 2em;

    button {
      height: 3em;
      width: 6em;
      background-color: #7eafba;
      color: #d9b382;
      font-weight: bold;
      text-shadow: 2px 2px 2px #111;
      border-radius: 12px;
      border: none;
      padding: 2%;
      font-size: 1.3em;
      cursor: pointer;
    }
  }
  button:focus{
    outline: none
  }
`;
const Quote = styled.div`
  width: 80%;
  margin: 1em auto;
  padding: 2%;
  text-align: center;

  font-size: 1.7em;
  line-height: 1.3em;
  font-family: "Lato", serif;
  background-color: #fcfcfc;
  border-radius: 12px;

  h5 {
    font-weight: bold;
  }
`;

const Splash = props => {
  const [quote, updateQuote] = useState({});

  useEffect(() => {
    axios
      .get("http://quotes.rest/qod.json?category=students")
      .then(res => {
        console.log(res.data.contents.quotes[0]);
        updateQuote(res.data.contents.quotes[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <SplashPage>
      <Info>
        <H1 className="">Welcome to OER Bookr</H1>
        <H4>
          OER in an easy to use format, for the benefit of educators and
          learners everywhere.
        </H4>

        <Quote>
          <h5>{quote.quote}</h5>
          <h6> - {quote.author}</h6>
        </Quote>
        <Buttons>
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </Buttons>
      </Info>
      <img src={lecture2} alt="Empty Lecture Hall" />
    </SplashPage>
  );
};

export default Splash;
