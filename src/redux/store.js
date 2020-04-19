import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import pokeReducer from "./pokeDucks";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
  pokemons: pokeReducer,
});

export default function generateStore() {
  const store = createStore(
    combinedReducers,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
