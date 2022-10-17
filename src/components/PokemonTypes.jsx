import React from "react";

const PokemonTypes = ({ pokemonTypes }) => {
  return (
    <div className='d-flex gap-2 flex-wrap justify-content-center align-items-center'>
      {pokemonTypes.map((e, idx) => {
        return (
          <p key={idx} className={`btn type-${e.type.name}`}>
            {e.type.name}
          </p>
        );
      })}
    </div>
  );
};

export default PokemonTypes;
