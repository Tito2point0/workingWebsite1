import React from "react";
import styled from "styled-components";

const TitleText = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 3rem;
text-align: center;
color: #333 ;
margin-top: 20Px;
margin-bottom: 20px;
`;

const Title = ({ title }) => {
    return (
        <TitleText>{title}</TitleText>
    );
}
export default Title;