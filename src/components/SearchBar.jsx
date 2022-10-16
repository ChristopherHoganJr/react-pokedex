import React from "react";

const SearchBar = ({ pokemonName, setPokemonName, searchPokemon }) => {
  return (
    <form
      className="d-flex align-items-center gap-3"
      onSubmit={(e) => searchPokemon(e)}
    >
      <div className="">
        <label className="me-1">Pokemon Name:</label>
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
      </div>
      <button className="btn btn-success btn-sm">Look Up Pokemon</button>
    </form>
  );
};

export default SearchBar;
