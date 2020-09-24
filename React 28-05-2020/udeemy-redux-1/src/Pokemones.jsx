import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  anteriorPokemonAccion,
  obtenerPokemonesAccion,
  siguientePokemonAccion,
} from "./redux/pokeDucks";

const Pokemones = () => {
  const dispatch = useDispatch();

  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);
  console.log(pokemones);

  return (
    <div>
      lista de pokemones
      <br></br>
      {/* Si el largo del arreglo de pokemones es igual 0, muestra el boton" */}
      {pokemones.length === 0 && (
        <button onClick={() => dispatch(obtenerPokemonesAccion())}>
          Get pokemones
        </button>
      )}
      {/* && "en caso de ser positivo muestra el boton..." */}
      {previous && (
        <button onClick={() => dispatch(anteriorPokemonAccion())}>
          Anterior pokemones
        </button>
      )}
      {/* && "en caso de ser positivo muestra el boton..." */}
      {next && (
        <button onClick={() => dispatch(siguientePokemonAccion())}>
          Siguiente pokemones
        </button>
      )}
      <ul>
        {pokemones.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;
