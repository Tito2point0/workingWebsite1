// src/components/SearchPage.js
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PokeData from './PokeData';
import { fetchPokemon } from '../actions/actions';
import PokeSearchForm from './PokeSearchForm';

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
    <div>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
  loading: state.loading,
  next: state.next,
  previous: state.previous,
});

export default connect(mapStateToProps, { fetchPokemon })(SearchPage);
