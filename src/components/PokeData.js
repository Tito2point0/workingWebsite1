// src/components/PokeData.js
import React from "react";

const PokeData = ({ pokemons }) => {
  return (
    <div>
      <h3>{pokemons.name}</h3>
      <p>ID: {pokemons.id}</p>
      <p>Supertype: {pokemons.supertype}</p>
      <p>HP: {pokemons.hp}</p>
      <img src={pokemons.images.small} alt={pokemons.name} />
    </div>
  );
};

export default PokeData;
