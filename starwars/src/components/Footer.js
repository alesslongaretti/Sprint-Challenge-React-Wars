import React from 'react';
import styled from 'styled-components';

const WrapperP = styled.div`
background-color: rgba(255, 255, 255, 0.2); 
font-size: 30px;
text-align: center;
color: black;
margin-top: 190px;

`;

const footer = props => {
    return (
        <WrapperP>
        <p>By: Alessandra Longaretti</p>

        </WrapperP>
    )
}

export default footer;