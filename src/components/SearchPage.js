import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PokeData from './PokeData';
import { fetchPokemon } from '../actions/actions';
import PokeSearchForm from './PokeSearchForm';
import Banner from '../components/Banner';
import styled from 'styled-components';

// Create a styled container for the page
const SearchPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const BannerContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const SearchPage = ({ pokemon = [], loading, next, previous, fetchPokemon }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    debugger;
    // Only fetch Pokémon if searchTerm is not empty
    if (searchTerm.trim()) {
      fetchPokemon(searchTerm, currentPage);
    }
  }, [searchTerm, currentPage, fetchPokemon]);

  const handleSearch = (term) => {
    debugger;
    setSearchTerm(term);
    setCurrentPage(1);    // Reset to first page on new search
  };

  const handleNextPage = () => {
    debugger
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
  console.log("Current Pokémon Data: ", pokemon);
  console.log("Current Page: ", currentPage);
  console.log("Next Page Available: ", next);
  console.log("Previous Page Available: ", previous);

  return (
    <SearchPageContainer>
      <BannerContainer>
        <Banner />
      </BannerContainer>

      <PokeSearchForm onSearch={handleSearch} />

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
