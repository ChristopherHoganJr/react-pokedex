import React from "react";

const PokemonGames = ({ pokemonGames }) => {
  return (
    <div className='d-flex flex-wrap gap-2'>
      {pokemonGames.map((e, idx) => {
        return (
          <p key={idx} className={`btn game-${e.version.name}`}>
            {e.version.name}
          </p>
        );
      })}
    </div>
  );
};

export default PokemonGames;
