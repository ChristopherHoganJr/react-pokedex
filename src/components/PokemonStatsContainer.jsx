import React from "react";

// components
import PokemonName from "./PokemonName";
import PokemonTypes from "./PokemonTypes";
import PokemonGames from "./PokemonGames";
import PokemonMoves from "./PokemonMoves";

const PokemonStatsContainer = ({ pokemon }) => {
  return (
    <div className='text-center'>
      <img src={pokemon.sprites.front_default} alt='' />

      <PokemonName name={pokemon.name} pokemonId={pokemon.id} />

      {/* Types */}
      {pokemon.types.length > 1 ? (
        <h4>--- Types ---</h4>
      ) : (
        <h4>--- Type ---</h4>
      )}
      <PokemonTypes pokemonTypes={pokemon.types} />

      {/* Games */}
      {pokemon.game_indices.length > 1 ? (
        <h4>--- Games ---</h4>
      ) : (
        <h4>--- Game ---</h4>
      )}
      <PokemonGames pokemonGames={pokemon.game_indices} />

      {/* Moves */}
      <h4>--- Able to learn moves ----</h4>
      <PokemonMoves pokeMoves={pokemon.moves} />
    </div>
  );
};

export default PokemonStatsContainer;
