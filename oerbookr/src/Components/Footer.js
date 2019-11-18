import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    const Footer =  styled.div `
    background-color: #7EAFBA;
    color: #D9B382; 
    text-align: center;
    padding: 1em;
    bottom: 0px;
    width: 100%;
    `
    return (
        <Footer>
            <h1>OER Bookr</h1>
        </Footer>
    );
}

export default Footer;
