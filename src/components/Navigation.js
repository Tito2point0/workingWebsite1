import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
background-color: #333;
padding: 10px;
text-align: center;
`;  
const NavLink = styled(Link)`
color: white;
margin: 0 10px;
text-decoration: none;
font-size: 1.2rem;

&:hover {
    text-decoration: underline;
    color: #0073e6;
}
`;  


const Navigation = () => {
    return (
        <NavContainer>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            {[...Array(5)].map((_, index) => (
                <NavLink key={index} to={`/placeholder/${index + 1}`}>
                    Placeholder {index + 1}
                </NavLink>
            ))}
        </NavContainer>
    )
}

export default Navigation;