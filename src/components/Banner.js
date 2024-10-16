import React from "react";
import styled from "styled-components"

const BannerContainer = styled.div`
background-color: #0073e6;
color: white;
padding: 50px;
text-align: center;
`;

const Banner = () => { 
    return (
        <BannerContainer>
            <h1>House of Cards</h1>
        </BannerContainer>
    )
}
export default Banner;