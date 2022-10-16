import React from "react";

// components

const PokemonStatsContainer = ({ pokemon }) => {
  return (
    <div className="text-center">
      <img src={pokemon.sprites.front_default} alt="" />

      <h3>
        <b>{pokemon.name}</b> - Pokedex Num: #{pokemon.id}
      </h3>
      <div className="d-flex gap-2 flex-wrap justify-content-center align-items-center">
        {pokemon.types.length > 1 ? <p>Types:</p> : <p>Type:</p>}
        {pokemon.types.map((e) => {
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
          return <p className={`btn btn-${pokemonType}`}>{e.type.name}</p>;
        })}
      </div>
      <div></div>
    </div>
  );
};

export default PokemonStatsContainer;
