import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Header = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #7EAFBA;

width: 100vw;
position: fixed;
top: 0px;
left: 0px;
height: 100px;

margin-bottom: 3em;


@media(max-width: 500px) {
    
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
    p a{
        text-decoration: none;
        color: #D9B382;
    }

display: flex;
justify-content: space-around;
color: #D9B382;
width: 60%;
margin: -2em auto 0 auto;
font-size: 1.5em;
text-shadow: 2px 2px 2px #333;

`

const Navigation = () => {
    return (
        <Header>
            <H1 className="title">OER Bookr</H1>
            <UserButtons className="user-buttons">
                <p className="home">Home</p>
                <p className="log">Log Out</p>
                <p><Link to='/wishlist'>WishList</Link></p>
            </UserButtons>
        </Header>
    );
}

export default Navigation;
