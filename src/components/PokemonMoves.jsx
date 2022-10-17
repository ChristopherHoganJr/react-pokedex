import React from "react";

const PokemonMoves = ({ pokeMoves }) => {
  return (
    <div className='d-flex flex-wrap gap-2'>
      {pokeMoves.map((e, idx) => {
        return (
          <p key={idx} className='btn btn-light'>
            {e.move.name}
          </p>
        );
      })}
    </div>
  );
};

export default PokemonMoves;
