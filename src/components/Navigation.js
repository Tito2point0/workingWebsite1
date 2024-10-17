// src/components/Navigation.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components for navigation
const NavContainer = styled.nav`
  background-color: #333;
  padding: 10px;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #0073e6;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 10px 0;
  }
`;

const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinksContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  @media (min-width: 769px) {
    display: block;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      {/* Hamburger button for small screens */}
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        ☰
      </HamburgerButton>

      <NavLinksContainer isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        <NavLink to="/ads">Ads</NavLink>
        <NavLink to="/search">Search</NavLink>
      
      </NavLinksContainer>
    </NavContainer>
  );
};

export default Navigation;
