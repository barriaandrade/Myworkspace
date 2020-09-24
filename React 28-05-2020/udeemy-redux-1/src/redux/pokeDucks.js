import axios from "axios";

// constantes
const dataInicial = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const GET_POKEMONES_EXITO = "GET_POKEMONES_EXITO";
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO";
const ANTERIOR_POKEMONES_EXITO = "ANTERIOR_POKEMONES_EXITO";
// reducer
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_POKEMONES_EXITO:
      return {
        ...state,
        ...action.payload,
      };
    case SIGUIENTE_POKEMONES_EXITO:
      return {
        ...state,
        ...action.payload,
      };
    case ANTERIOR_POKEMONES_EXITO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
// actions
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
    );

    dispatch({
      type: GET_POKEMONES_EXITO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const siguientePokemonAccion = () => async (dispatch, getState) => {
  //encerrando la variable en llaves accedo a la propiedad del objeto pokemones
  //pokemones viene del store
  const { next } = getState().pokemones;

  try {
    const res = await axios.get(next);

    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const anteriorPokemonAccion = () => async (dispatch, getState) => {
  //encerrando la variable en llaves accedo a la propiedad del objeto pokemones
  //pokemones viene del store
  const { previous } = getState().pokemones;

  try {
    const res = await axios.get(previous);

    dispatch({
      type: ANTERIOR_POKEMONES_EXITO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
