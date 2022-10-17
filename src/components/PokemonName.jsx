import React from "react";

const PokemonName = ({ name, pokemonId }) => {
  let pokemonName = name[0].toUpperCase() + name.slice(1);
  return (
    <h3>
      <b>{pokemonName}</b> - [#{pokemonId}]
    </h3>
  );
};

export default PokemonName;
