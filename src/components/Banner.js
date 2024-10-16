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
`;

const Banner = () => {
  return <BannerContainer />;
};

export default Banner;
