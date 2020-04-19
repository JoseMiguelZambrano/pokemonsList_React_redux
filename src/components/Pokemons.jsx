import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsActions, nextPokemonsActions } from "../redux/pokeDucks";

function Pokemons() {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemons.array);

  return (
    <div>
      List of Pokemons
      <button onClick={() => dispatch(getPokemonsActions())}>
        Get Pokemons default
      </button>
      <button onClick={() => dispatch(nextPokemonsActions())}>
        Next Pokemons List
      </button>
      <br />
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
      <ul></ul>
    </div>
  );
}

export default Pokemons;
