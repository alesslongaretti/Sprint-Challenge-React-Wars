import React from 'react';
import './App.css';

import StarContainer from "./components/StarContainer";
import styled from "styled-components";

const Title = styled.h1`
justify-content: center;
display: flex;
color: #ffb158;
font-size: 60px;
font-weight: 900;
border: solid .5px black;
background-color: #f5f2d0;

`;

const WrapperDiv = styled.div`

display: flex;
justify-content: center;


`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div>

      <Title >React Wars</Title>
      <WrapperDiv>

        <StarContainer/>
      
      </WrapperDiv>
      
    
    </div>
  );
}

export default App;
