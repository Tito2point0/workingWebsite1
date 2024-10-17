import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PokeData from './PokeData';
import { fetchPokemon } from '../actions/actions';
import PokeSearchForm from './PokeSearchForm';
import Banner from '../components/Banner'; // Import the banner
import styled from 'styled-components';

// Background image and page styling
const SearchPageContainer = styled.div`
  background-image: url('${process.env.PUBLIC_URL}/images/background.jpg'); /* Replace with your actual background image path */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;

  /* Responsive layout for mobile */
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Responsive search results container
const SearchResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  /* Ensure search results fit well on mobile */
  @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column; /* Stack search results vertically on mobile */
  }
`;

const SearchPage = ({ pokemon = [], loading, next, previous, fetchPokemon }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetchPokemon(searchTerm, currentPage);
  }, [searchTerm, currentPage, fetchPokemon]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (next) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (previous) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <SearchPageContainer>
      {/* Include the banner at the top of the search page */}
      <Banner />

      {/* Search form */}
      <PokeSearchForm onSearch={handleSearch} />

      {/* Loading message */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <SearchResultsContainer>
          {pokemon.length > 0 ? (
            pokemon.map((poke, index) => <PokeData key={index} pokemon={poke} />)
          ) : (
            <p>No Pokémon found.</p>
          )}
        </SearchResultsContainer>
      )}

      {/* Pagination buttons */}
      <div>
        <button onClick={handlePreviousPage} disabled={!previous}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={!next}>
          Next
        </button>
      </div>
    </SearchPageContainer>
  );
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
  loading: state.loading,
  next: state.next,
  previous: state.previous,
});

export default connect(mapStateToProps, { fetchPokemon })(SearchPage);
