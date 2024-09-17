// src/actions/action.js
import axios from 'axios';

// Action Types
export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

// Action Creators
export const fetchPokemonRequest = () => ({
  type: FETCH_POKEMON_REQUEST,
});

export const fetchPokemonSuccess = (pokemon) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: pokemon,
});

export const fetchPokemonFailure = (error) => ({
  type: FETCH_POKEMON_FAILURE,
  payload: error,
});

// Thunk Action to fetch Pokémon
export const fetchPokemon = (searchTerm) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());
    axios
      .get(`https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}`)
      .then((response) => {
        dispatch(fetchPokemonSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(fetchPokemonFailure(error.message));
      });
  };
};
