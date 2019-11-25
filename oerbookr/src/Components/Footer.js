import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    const Footer =  styled.div `
    background-color: #7EAFBA;
    color: #D9B382; 
    text-align: center;
    padding: 1.3em 0em;
    width: 100%;
    margin-top: 3em;
    text-shadow: 2px 2px 2px #333;
    font-family: 'Secular One', sans-serif;

    `
    return (
        <Footer>
            <h1>OER Bookr</h1>
        </Footer>
    );
}

export default Footer;
