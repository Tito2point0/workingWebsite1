import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Advertisement from "../components/Advert";

// Placeholder text component for fake content
const BodyText = styled.div`
  padding: 20px;
  font-size: 1.2rem;
  color: #333;
`;

// Main container for the layout with ads on the side
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// Container for the content (text)
const ContentContainer = styled.div`
  width: 70%; /* Take up most of the width for the content */
`;

// Advertisement sidebar container
const AdSidebar = styled.div`
  width: 25%; /* Width for the ad sidebar */
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
`;

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Advertisement /> {/* Optional ad between Banner and Title */}
      <Title title="Welcome to our HomePage" />
      <Navigation />
      
      {/* Layout with content and sidebar */}
      <LayoutContainer>
        {/* Main content */}
        <ContentContainer>
          <BodyText>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat orci at arcu pretium facilisis. Nulla auctor est et volutpat blandit. Phasellus eget arcu nec enim interdum vehicula. Fusce vitae orci venenatis, egestas odio et, vulputate lectus.</p>
            <p>Sed consequat eros nec dolor pulvinar, non tincidunt purus molestie. Integer consectetur sem vel vehicula luctus. Aenean accumsan nunc ac velit pretium venenatis. Donec dapibus tortor nec velit vulputate, nec commodo lectus laoreet.</p>
            <p>Vivamus ultricies quam vel nisi fringilla, nec tincidunt libero aliquet. Etiam euismod ligula non nisi aliquet, sed tristique orci tempor.</p>
          </BodyText>
        </ContentContainer>

        {/* Advertisement on the side */}
        <AdSidebar>
          <Advertisement /> {/* Ad on the sidebar */}
          <p>Advertisement Space</p>
        </AdSidebar>
      </LayoutContainer>
    </div>
  );
};

export default HomePage;
