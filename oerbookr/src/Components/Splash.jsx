import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import lecture2 from '../img/lecture2.jpg';

const SplashPage = styled.div `
padding: 12%;
display: flex;
justify-content: space-between;


img {
    width: 50%;
}

`
const H1 = styled.h1`
font-size: 2.4em;
padding: 3%;
`
const H4 = styled.h4`
font-size: 1.5em;
padding: 3%;
`
const Buttons = styled.div`
display: flex; 
justify-content: space=between;
align-items: center;
 a {
     margin: 1em 2em;

     button {
        height: 3em;
        width: 6em;
        background-color: #7EAFBA;
        color: #D9B382;
        font-weight: bold;
        text-shadow: 2px 2px 2px #111;
        border-radius: 12px;
        border: none;
        padding: 3%;
        font-size: 1.3em;
        cursor: pointer;
     }
 }
`

const Splash = (props) => {
    return (
        <SplashPage>
            <div>
            <H1 className="">Welcome to OER Bookr</H1>
            <H4>Your resource for learnin' good.</H4>
           <Buttons>
           <Link to = '/login'><button>Login</button></Link>
          
          <Link to = '/signup'><button>Sign Up</button></Link>
           </Buttons>
            </div>
            <img src={lecture2} alt="Empty Lecture Hall"/>
            
            
          
        </SplashPage>
    );
}

export default Splash;
