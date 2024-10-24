import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PokeData from './PokeData';
import { fetchPokemon } from '../actions/actions';
import PokeSearchForm from './PokeSearchForm';
import Banner from '../components/Banner'; // Import the Banner component
import styled from 'styled-components'; // Use styled-components for responsive design

// Create a styled container for the page
const SearchPageContainer = styled.div`
  width: 100%; /* Full width of the page */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// Make sure the banner is responsive and takes full width
const BannerContainer = styled.div`
  width: 100%; /* Full width for the banner */
  margin-bottom: 20px; /* Space between the banner and the rest of the page */

  @media (max-width: 768px) {
    margin-bottom: 15px; /* Adjust margin for mobile */
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

  // Log the pokemon data you are trying to display
  console.log("Pokemon Data: ", pokemon);

  return (
    <SearchPageContainer>
      {/* Add the banner at the top of the search page */}
      <BannerContainer>
        <Banner />
      </BannerContainer>

      {/* Search form */}
      <PokeSearchForm onSearch={handleSearch} />

      {/* Loading message */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {pokemon.length > 0 ? (
            pokemon.map((poke, index) => <PokeData key={index} pokemon={poke} />)
          ) : (
            <p>No Pokémon found.</p>
          )}
        </div>
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
