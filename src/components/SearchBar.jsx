import React from "react";
import { useState, useEffect } from "react";

const SearchBar = ({ pokemonName, setPokemonName, searchPokemon }) => {
  const [empty, setEmpty] = useState(0);

  useEffect(() => {
    setEmpty(pokemonName.length);
  }, [pokemonName]);
  console.log(empty);
  return (
    <form
      className='d-flex align-items-center gap-3'
      onSubmit={(e) => searchPokemon(e)}>
      <div className=''>
        <label className='me-1'>Pokemon Name:</label>
        <input
          type='text'
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
      </div>
      <button
        className='btn btn-success btn-sm'
        disabled={empty === 0 ? true : false}>
        Look Up Pokemon
      </button>
    </form>
  );
};

export default SearchBar;
