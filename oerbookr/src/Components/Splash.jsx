import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import lecture2 from "../img/lecture2.jpg";

const SplashPage = styled.div`
  padding: 15% 0%;
  display: flex;
  justify-content: space-between;

  img {
    width: 50%;
    margin-right: 3%;

    @media (max-width: 800px) {
      width: 90%;
      margin: 0 auto;
    }
  }

  @media (max-width: 800px) {
    padding: 15% 0%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 800px) {
    padding: 18% 0%;
  }
`;
const H1 = styled.h1`
  font-size: 2.4em;
  padding: 6% 0%;
  line-height: 1.3em;
  width: 80%;
  margin: 0 auto;
  font-family: "Secular One", serif;
  @media (max-width: 500px) {
    font-size: 2em;
  }
`;
const H4 = styled.h4`
  font-size: 1.5em;
  padding: 3%;
  width: 80%;
  margin: 0 auto;
  font-family: "Lato", serif;
  @media (max-width: 500px) {
    width: 70%;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 80%;
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
      padding: 3%;
      font-size: 1.3em;
      cursor: pointer;
    }
  }
`;

const Splash = props => {
  return (
    <SplashPage>
      <div>
        <H1 className="">Welcome to OER Bookr</H1>
        <H4>
          OER in an easy to use format for the benefit of educators and learners
          everywhere.
        </H4>
        <Buttons>
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </Buttons>
      </div>
      <img src={lecture2} alt="Empty Lecture Hall" />
    </SplashPage>
  );
};

export default Splash;
