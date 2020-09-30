import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  anteriorPokemonAccion,
  obtenerPokemonesAccion,
  siguientePokemonAccion,
  unPokeDetalleAccion,
} from "../redux/pokeDucks";
import Detalle from "./Detalle";

const Pokemones = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchData = () => {
        dispatch(obtenerPokemonesAccion())
    }
    fetchData();
}, [dispatch])

  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);
  console.log(pokemones);

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Lista de pokemones</h3>
        <br></br>
        <div className="d-flex justify-content-between">
          {/* Si el largo del arreglo de pokemones es igual 0, muestra el boton" */}
          {pokemones.length === 0 && (
            <button
              onClick={() => dispatch(obtenerPokemonesAccion())}
              className="btn btn-dark"
            >
              Get pokemones
            </button>
          )}
          {/* && "en caso de ser positivo muestra el boton..." */}
          {previous && (
            <button
              onClick={() => dispatch(anteriorPokemonAccion())}
              className="btn btn-dark"
            >
              Anterior pokemones
            </button>
          )}
          {/* && "en caso de ser positivo muestra el boton..." */}
          {next && (
            <button
              onClick={() => dispatch(siguientePokemonAccion())}
              className="btn btn-dark"
            >
              Siguiente pokemones
            </button>
          )}
        </div>
        <ul className="list-group mt-3">
          {pokemones.map((item) => (
            <li key={item.name} className="list-group-item text-uppercase">
              {item.name}
              <button 
                className="btn btn-dark btn-sm float-right"
                onClick={() => dispatch(unPokeDetalleAccion(item.url))}
              >info</button>
              </li>
          ))}
        </ul>
      </div>
      <div className="col-md-6">
        <h3>Detalle del pokemon</h3>
        <Detalle></Detalle>
      </div>
    </div>
  );
};

export default Pokemones;
