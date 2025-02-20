// src/actions/action.js
import axios from 'axios';

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export const fetchPokemonRequest = () => ({
  type: FETCH_POKEMON_REQUEST,
});

export const fetchPokemonSuccess = (pokemon, next = null, previous = null) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: { pokemon, next, previous },
});

export const fetchPokemonFailure = (error) => ({
  type: FETCH_POKEMON_FAILURE,
  payload: error,
});


export const fetchPokemon = (searchTerm = '', page = 1, limit = 10) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());

    const offset = (page - 1) * limit;
    let url = `https://api.pokemontcg.io/v2/cards?limit=${limit}&offset=${offset}`;

    if (searchTerm) {
      url = `https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}&limit=${limit}&offset=${offset}`;
    }

    axios
      .get(url)
      .then((response) => {
        console.log("API Response: ", response.data);
        debugger;
        const { data, count } = response.data;

        // Manually calculate next/previous page
        const totalPages = Math.ceil(count / limit);
        const nextPage = page < totalPages ? page + 1 : null;
        const previousPage = page > 1 ? page - 1 : null;

        dispatch(fetchPokemonSuccess(data, nextPage, previousPage));
      })
      .catch((error) => {
        console.log("API Error: ", error.message);
        dispatch(fetchPokemonFailure(error.message));
      });
  };
};

// // actions.js
// import axios from 'axios';

// // Action Types
// export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
// export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
// export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';
// export const FETCH_POKEMON = 'FETCH_POKEMON';

// // Hardcoded API key for testing (replace with your actual key)
// // const apiKey = 'ba66f255-0f49-4d14-ac3e-088d3d39044e';  // Replace 'your_api_key_here' with your API key

// export const fetchPokemonRequest = () => ({
//   type: FETCH_POKEMON_REQUEST,
// });

// export const fetchPokemonSuccess = pokemon => ({
//   type: FETCH_POKEMON_SUCCESS,
//   payload: pokemon,
// });

// export const fetchPokemonFailure = (error) => ({
//   type: FETCH_POKEMON_FAILURE,
//   payload: error,
// });

// // Thunk Action Creator for fetching Pokemon
// export const fetchPokemon = (searchTerm) => {
//   return (dispatch) => {
//     dispatch(fetchPokemonRequest());

//     // Make the API request using Axios with the hardcoded API key
//     axios
//       .get(`https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}`, {
//         // headers: {
//         //   'X-Api-Key': apiKey,
//         // },
//       })
//       .then((response) => {
//         // Assuming the API response contains the Pokemon data
//         console.log(response.data.data);

//         // Dispatch success action with the received data
//         dispatch(fetchPokemonSuccess(response.data.data));
//       })
//       .catch((error) => {
//         // Dispatch failure action with the error message
//         dispatch(fetchPokemonFailure(error.message));
//       });
//   };
// };
/*// actions.js
import axios from 'axios';

// Action Types
export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export const fetchPokemonRequest = () => ({
  type: FETCH_POKEMON_REQUEST,
});

export const fetchPokemonSuccess = (data, page, totalPages) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: { data, page, totalPages },
});

export const fetchPokemonFailure = (error) => ({
  type: FETCH_POKEMON_FAILURE,
  payload: error,
});

// Utility function to build query string
const buildQueryString = (searchTerm, type, rarity) => {
  let query = `name:"${searchTerm}"`;
  if (type) query += ` type:"${type}"`;
  if (rarity) query += ` rarity:"${rarity}"`;
  return query;
};

// Thunk Action Creator for fetching Pokemon
export const fetchPokemon = (searchTerm, type, rarity, page = 1, pageSize = 15) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());

    const queryString = buildQueryString(searchTerm, type, rarity);
    const apiKey = process.env.REACT_APP_API_KEY;  // Ensure your .env file is set up correctly

    axios
      .get(`https://api.pokemontcg.io/v2/cards?q=${queryString}&limit=${pageSize}&offset=${(page - 1) * pageSize}`, {
        headers: {
          'X-Api-Key': apiKey,
        },
      })
      .then((response) => {
        const { data, count } = response.data;
        const totalPages = Math.ceil(count / pageSize);

        // Dispatch success action with the received data and pagination info
        dispatch(fetchPokemonSuccess(data, page, totalPages));
      })
      .catch((error) => {
        // Dispatch failure action with the error message
        dispatch(fetchPokemonFailure(error.message));
      });
  };
};
//   */ 