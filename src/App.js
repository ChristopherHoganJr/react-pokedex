import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// components
import SearchBar from "./components/SearchBar";
import PokemonStatsContainer from "./components/PokemonStatsContainer";

function App() {
  // useNavigate
  const navigate = useNavigate();
  // States
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState();

  // Functions
  const searchPokemon = (e) => {
    e.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => navigate("/err"));
  };

  return (
    <div className="App">
      <h1 className="text-center">React Pokedex</h1>
      <div className="d-flex justify-content-center">
        <SearchBar
          pokemonName={pokemonName}
          setPokemonName={setPokemonName}
          searchPokemon={searchPokemon}
        />
      </div>
      <div className="mt-3">
        {pokemon ? (
          <PokemonStatsContainer pokemon={pokemon} />
        ) : (
          <p className="text-center">
            Please enter a pokemon name to see stats.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
