import React from "react";
import Banner from "../components/Banner";
import Title from "../components/Title";
import Navigation from "../components/Navigation";

const HomePage = () => {
    return (
        <div>
            {/* <Navigation /> */}
            <Banner />
            {/* <Title title="Welcome to our HomePage" /> */}
            {/* <Navigation /> */}
       <p>Home Page</p>
        </div>
    ); // Added missing closing parenthesis
}

export default HomePage;