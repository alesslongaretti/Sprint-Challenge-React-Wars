import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
padding: 35px;
text-align: center;


`;

const StarCard = props => {
    return (
        <Wrapper>
        <h1>{props.names}</h1>
        <p> Height: {props.height}</p>
        <p>Gender: {props.genders}</p>
        <p>Birth Year: {props.birthYear}</p>


        </Wrapper>
    )
}

export default StarCard;