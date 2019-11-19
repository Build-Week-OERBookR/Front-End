import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SplashPage = styled.div `
padding: 15%;

`

const Splash = (props) => {
    return (
        <SplashPage>
            <h1 className="">Welcome to OER Bookr</h1>
            <h4>Your resource for learnin' good.</h4>
           <div>
           <Link to = '/login'><button>Login</button></Link>
          
          <Link to = '/signup'><button>Sign Up</button></Link>
           </div>
            
          
        </SplashPage>
    );
}

export default Splash;
