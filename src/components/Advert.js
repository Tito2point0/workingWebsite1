// src/components/Advertisement.js
import React from 'react';
import styled from 'styled-components';

// Advertisement box styling
const AdContainer = styled.div`
  width: 100%;
  height: 150px; /* Adjust height as needed */
  background-color: #f5f5f5;
  border: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0; /* Space around the ad */
`;

const Advertisement = () => {
  return (
    <AdContainer>
      <p>Your Advertisement Here</p>
    </AdContainer>
  );
};

export default Advertisement;
