import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for the scrolling effect
const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Title container styled component (the box)
const TitleContainer = styled.div`
  width: 100%; /* Full width of the screen */
  height: 100px; /* Set a fixed height for the title box */
  overflow: hidden; /* Hide overflow text */
  background-color: #333; /* Dark background for LED effect */
  padding: 10px;
  border: 2px solid #00FF00; /* Green border for LED-style look */
  display: flex; /* Use flexbox for centering */
  align-items: center; /* Vertically center text */
  justify-content: center; /* Horizontally center text */
`;

// Scrolling text styled component
const ScrollingTitle = styled.div`
  display: inline-block;
  color: #00FF00; /* Green text for LED effect */
  font-family: 'Roboto', sans-serif;
  font-size: 3rem; /* Font size for the title */
  white-space: nowrap; /* Prevent text wrapping */
  animation: ${scroll} 10s linear infinite; /* Horizontal scroll animation */
`;

const Title = ({ title }) => {
  return (
    <TitleContainer>
      <ScrollingTitle>{title}</ScrollingTitle>
    </TitleContainer>
  );
};

export default Title;
