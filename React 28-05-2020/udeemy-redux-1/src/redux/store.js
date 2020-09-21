import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//llamar reducer
import pokeReducer from "./pokeDucks";

const rootReducer = combineReducers({
  //de este nombre se lee desde el componente
  pokemones: pokeReducer,
});

//configura extensión del chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
