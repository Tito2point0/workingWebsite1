import React from "react";
import styled from "styled-components";

// Use the correct background image path, considering the deployment environment
const BannerContainer = styled.div`
  background-color: #0073e6;
  color: white;
  padding: 50px;
  text-align: center;
  background-image: url('${process.env.PUBLIC_URL}/picture/pokemon_banner_by_underratedwonderland_d72tpu2-fullview.jpg');
  background-size: cover;
  background-position: center;
  height: 300px;

  // Media query for mobile screens (max-width: 768px)
  @media (max-width: 768px) {
    padding: 20px; // Reduce padding on smaller screens
    height: 200px; // Reduce height for mobile
    background-size: contain; // Ensure the image fits better on mobile
  }

  // Media query for very small screens (max-width: 480px)
  @media (max-width: 480px) {
    padding: 10px;
    height: 150px; // Further reduce height on very small devices
    background-size: cover; // Keep the background covering the banner
    background-position: top; // Adjust positioning for better fit on small screens
  }
`;

const Banner = () => {
  return <BannerContainer />;
};

export default Banner;
