import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Header = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #7EAFBA;
width: 100%;
position: fixed;
top: 0px;
left: 0px;
height: 100px;

@media(max-width: 500px) {
    
}

 a{
    text-decoration: none;
     color: #D9B382;
     font-weight: bold;
     
     @media(max-width: 800px) {
        margin-top: 12%;
    }
     @media(max-width: 500px) {
        margin: 18% 4% 0% 4%;
        
    }

    @media(min-width: 1000px) {
        margin-top: 10%;
    }

    @media(min-width: 1200px) {
        margin-top: 8%;
    }

 } 
`
const H1 = styled.h1 `
color: #D9B382;
font-family: 'Secular One', sans-serif;
text-shadow: 2px 2px 2px #333;
`
const UserButtons = styled.div `
display: flex;
justify-content: space-around;
color: #D9B382;
width: 60%;
margin: -2em auto 0 auto;
font-size: 1.5em;
text-shadow: 2px 2px 2px #333;

@media(max-width: 500px) {
    font-size: 1em;
    width: 80%;
}

`

const Navigation = () => {
    return (
        <Header>
            <H1 className="title">OER Bookr</H1>
            <UserButtons className="user-buttons">
                <Link to='/booklist'>Home</Link>
                <Link 
                    to='/'  
                    className="log"
                    onClick={()=> {
                        localStorage.removeItem('token')
                    }}>Log Out</Link>
                <Link to='/wishlist'>WishList</Link>
            </UserButtons>
        </Header>
    );
}

export default Navigation;
