// src/reducers/reducer.js
import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE } from '../actions/actions';

const initialState = {
  pokemon: [],
  loading: false,
  error: '',
  next: null,
  previous: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
      case FETCH_POKEMON_SUCCESS:
        const { pokemon, next, previous } = action.payload;  // Destructure the payload
     debugger;  
      return {
          ...state,
          loading: false,
          pokemon,    // Store Pokémon list
          next,       // Store the next page
          previous,   // Store the previous page
        };
      
    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
