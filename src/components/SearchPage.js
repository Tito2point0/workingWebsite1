// src/components/SearchPage.js
import React from 'react';
import PokeSearchForm from './PokeSearchForm';
import PokeData from './PokeData';
import { connect } from 'react-redux';

const SearchPage = ({ pokemon, loading }) => {
  return (
    <div>
      <h1>Pokémon Search</h1>
      <PokeSearchForm />
      {loading ? <p>Loading...</p> : (
        <div>
          {pokemon.map((poke, index) => (
            <PokeData key={index} pokemons={poke} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
  loading: state.loading,
});

export default connect(mapStateToProps)(SearchPage);
