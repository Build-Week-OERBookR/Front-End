import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SplashPage = styled.div `
padding: 10%;

`

const Splash = (props) => {
    return (
        <SplashPage>
            <h1 className="">Welcome to OER Bookr</h1>
            <h4>Your resource for learnin' good.</h4>
            <ul>
          <li>
            <Link to = '/login'>Login</Link>
          </li>
          <li>
            <Link to = '/signup'>SignUp</Link>
          </li>
        </ul>
        </SplashPage>
    );
}

export default Splash;
