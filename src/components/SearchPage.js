import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchPokemon } from '../actions/actions';
import PokeData from './PokeData';
import PokeSearchForm from './PokeSearchForm';
import Banner from '../components/Banner';

const SearchPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0f172a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  color: #f1f5f9;
`;

const BannerWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const ResultsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  background-color: #1e293b;
  padding: 20px;
  border-radius: 12px;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;

  button {
    background-color: #3b82f6;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;

    &:hover:not(:disabled) {
      background-color: #2563eb;
    }

    &:disabled {
      background-color: #64748b;
      cursor: not-allowed;
    }
  }
`;

const SearchPage = ({ pokemon = [], loading, next, previous, fetchPokemon }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (searchTerm.trim()) {
      fetchPokemon(searchTerm, currentPage);
    }
  }, [searchTerm, currentPage, fetchPokemon]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (next) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (previous) setCurrentPage((prev) => prev - 1);
  };

  return (
    <SearchPageContainer>
      <BannerWrapper>
        <Banner />
      </BannerWrapper>

      <PokeSearchForm onSearch={handleSearch} />

      {loading ? (
        <p>Loading Pokémon...</p>
      ) : (
        <ResultsContainer>
          {pokemon.length > 0 ? (
            pokemon.map((poke, index) => <PokeData key={index} pokemon={poke} />)
          ) : (
            <p>No Pokémon found.</p>
          )}
        </ResultsContainer>
      )}

      <NavigationButtons>
        <button onClick={handlePreviousPage} disabled={!previous}>Previous</button>
        <button onClick={handleNextPage} disabled={!next}>Next</button>
      </NavigationButtons>
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