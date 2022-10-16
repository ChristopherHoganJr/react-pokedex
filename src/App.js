import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// components
import SearchBar from "./components/SearchBar";
import PokemonStatsContainer from "./components/PokemonStatsContainer";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // States
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState();
  const [notFound, setNotFound] = useState(false);

  // Functions
  const searchPokemon = (e) => {
    e.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((res) => {
        setPokemon(res.data);
        setNotFound(false);
      })
      .catch((err) => setNotFound(true));
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
        {notFound === true ? (
          <ErrorMessage />
        ) : notFound === false && !pokemon ? (
          <p className="text-center">
            Please enter a pokemon name to see stats.
          </p>
        ) : (
          <PokemonStatsContainer pokemon={pokemon} />
        )}
      </div>
    </div>
  );
}

export default App;
