import React, { useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import AboutMe from "../data/AboutMe";
import blog1 from "../data/blog1";

// Styled Components
const PageContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 20px;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
`;

const ContentContainer = styled.div`
  width: 70%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SidebarContainer = styled.div`
  width: 25%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BlogPost = styled.div`
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px dashed #ddd;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  border: 2px solid #555;
`;

const BlogTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between the title and sprite */
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 10px;

  img {
    width: 40px; /* Adjust sprite size */
    height: 40px;
  }
`;

const PublishDate = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
`;

const BlogContent = styled.div`
  font-size: 1.2rem;
  color: #34495e;
  line-height: 1.8;
  margin-top: 10px;

  img {
    width: 100%;
    border-radius: 8px;
    margin: 20px 0;
  }
`;

const AboutSection = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 120px; /* Set the size of the circular image */
    height: 120px; /* Keep it equal to width for a perfect circle */
    border-radius: 50%; /* Makes the image circular */
    margin-bottom: 10px;
    border: 3px solid #ddd; /* Optional border for better appearance */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow for a modern look */
    object-fit: cover; /* Ensures the image fits within the circle */
  }

  h3 {
    font-size: 1.5rem;
    color: #2c3e50;
  }

  p {
    font-size: 1rem;
    color: #7f8c8d;
  }
`;

const HomePage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Prismatic Madness: The Pokémon TCG Scalping Crisis",
      content:blog1,
      author: "Jason Vasquez",
      date: "January 20, 2025",
      image: "/1gengar.png",
      contentImage: "/5pik.jpg",
      sprite: "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
      spriteAlt: "Gengar",
      spriteLink: "https://pokemondb.net/pokedex/gengar",
    },
    {
      id: 2,
      title: "Why React is Great for Developers",
      content:
        "React has taken the developer world by storm for its simplicity and flexibility. It makes building user interfaces a breeze, allowing developers to focus on delivering great user experiences.",
      author: "John Smith",
      date: "January 19, 2025",
      image: "/1pikachu.png",
      contentImage: "3espeon.jpg",
      sprite: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
      spriteAlt: "Pikachu",
      spriteLink: "https://pokemondb.net/pokedex/pikachu",
    },
  ]);

  return (
    <PageContainer>
      {/* Full-Width Banner */}
      <Banner />

      {/* Centered Content */}
      <CenteredContent>
        <Title title="Jason's Poke-binder" />
        <Navigation />

        <LayoutContainer>
          {/* Main Content */}
          <ContentContainer>
  {blogs.map((blog) => (
    <BlogPost key={blog.id}>
      <BlogTitle>
        {blog.sprite && (
          <a href={blog.spriteLink} target="_blank" rel="noopener noreferrer">
            <img src={blog.sprite} alt={blog.spriteAlt} />
          </a>
        )}
        {blog.title}
      </BlogTitle>
      <AuthorSection>
        <AuthorImage src={blog.image} alt={blog.author} />
        <div>
          <p>{blog.author}</p>
          <PublishDate>{blog.date}</PublishDate>
        </div>
      </AuthorSection>
      <BlogContent>
        {/* Check if the content is a string or a component */}
        {typeof blog.content === "string" ? (
          <p>{blog.content}</p>
        ) : (
          <blog.content />
        )}
        <img src={blog.contentImage} alt={`${blog.title} illustration`} />
      </BlogContent>
    </BlogPost>
  ))}
</ContentContainer>


          {/* Sidebar */}
          <SidebarContainer>
            <AboutSection>
              <img src="/aboutme.png" alt="Blogger Profile" />
              <h3>About Me</h3>
              <p>
                {AboutMe}
              </p>
            </AboutSection>
            <h3>Recent Posts</h3>
            <ul>
              {blogs.map((blog) => (
                <li key={blog.id}>{blog.title}</li>
              ))}
            </ul>
          </SidebarContainer>
        </LayoutContainer>
      </CenteredContent>
    </PageContainer>
  );
};

export default HomePage;
 