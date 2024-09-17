// src/components/PokeSearchForm.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../actions/actions";

const PokeSearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchPokemon(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search Pokémon by Name"
        />
        <button type="submit">Search</button>
      </form>
      {props.loading && <p>Loading...</p>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps, { fetchPokemon })(PokeSearchForm);
