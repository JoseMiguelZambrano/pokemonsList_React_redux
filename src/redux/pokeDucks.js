import axios from "axios";

// consts

const initialState = {
  array: [],
  offset: 0,
};

//types

const GET_POKEMONS_SUCCES = "GET_POKEMONS_SUCCES";
const Next_POKEMONS_LIST = "Next_POKEMONS_LIST";

// reducer

export default function getPokemonsReducer(state = initialState, actions) {
  switch (actions.type) {
    case GET_POKEMONS_SUCCES:
      return { ...state, array: actions.payload };
    case Next_POKEMONS_LIST:
      return {
        ...state,
        array: actions.payload.array,
        offset: actions.payload.offset,
      };
    default:
      return state;
  }
}

//actions

export const getPokemonsActions = () => async (dispatch, getState) => {
  const listPokemons = getState();

  try {
    const res = await axios.get(
      `http://pokeapi.co/api/v2/pokemon?offset=${listPokemons}0&limit=20`
    );
    dispatch({
      type: GET_POKEMONS_SUCCES,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const nextPokemonsActions = () => async (dispatch, getState) => {
  const listPokemons = getState();
  const nextListPokemons = listPokemons.pokemons.offset + 20;

  try {
    const res = await axios.get(
      `http://pokeapi.co/api/v2/pokemon?offset=${nextListPokemons}&limit=20`
    );
    dispatch({
      type: Next_POKEMONS_LIST,
      payload: {
        array: res.data.results,
        offset: nextListPokemons,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
