import React from "react";

// components

const PokemonStatsContainer = ({ pokemon }) => {
  return (
    <div className="text-center">
      <img src={pokemon.sprites.front_default} alt="" />

      <h3>
        <b>{pokemon.name}</b> - Pokedex Num: #{pokemon.id}
      </h3>
      {pokemon.types.length > 1 ? (
        <h4>--- Types ---</h4>
      ) : (
        <h4>--- Type ---</h4>
      )}
      <div className="d-flex gap-2 flex-wrap justify-content-center align-items-center">
        {pokemon.types.map((e, idx) => {
          let pokemonType = "";
          switch (e.type.name) {
            case "fire":
              pokemonType = "danger";
              break;
            case "water":
              pokemonType = "primary";
              break;
            case "grass":
              pokemonType = "success";
              break;
            case "electric":
              pokemonType = "warning";
              break;
            case "steel":
              pokemonType = "secondary";
              break;
            case "ice":
              pokemonType = "info";
              break;
            case "dark":
              pokemonType = "dark";
              break;
            default:
              pokemonType = "light";
          }
          return (
            <p key={idx} className={`btn btn-${pokemonType}`}>
              {e.type.name}
            </p>
          );
        })}
      </div>
      {pokemon.game_indices.length > 1 ? (
        <h4>--- Games ---</h4>
      ) : (
        <h4>--- Game ---</h4>
      )}
      <div className="d-flex flex-wrap gap-2">
        {pokemon.game_indices.map((e, idx) => {
          return (
            <p key={idx} className="btn btn-light">
              {e.version.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonStatsContainer;
