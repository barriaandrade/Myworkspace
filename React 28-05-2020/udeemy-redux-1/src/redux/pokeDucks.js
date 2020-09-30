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
const POKE_INFO_EXITO = "POKE_INFO_EXITO";
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
    case POKE_INFO_EXITO:
      return {
        ...state,
        unPokemon: action.payload,
      };
    default:
      return state;
  }
}
// actions
export const unPokeDetalleAccion = (
  url = "https://pokeapi.co/api/v2/pokemon/1/"
) => async (dispatch) => {
  if (localStorage.getItem(url)) {
    dispatch({
      type: POKE_INFO_EXITO,
      payload: JSON.parse(localStorage.getItem(url)),
    });
    return;
  }

  try {
    const res = await axios.get(url);

    dispatch({
      type: POKE_INFO_EXITO,
      payload: {
        nombre: res.data.name,
        ancho: res.data.weight,
        alto: res.data.height,
        foto: res.data.sprites.front_default,
      },
    });

    localStorage.setItem(
      url,
      JSON.stringify({
        nombre: res.data.name,
        ancho: res.data.weight,
        alto: res.data.height,
        foto: res.data.sprites.front_default,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
  //Preguntamos por el localStorage. Si viene algo no consultamos directo a nuestra base
  if (localStorage.getItem("offset=0")) {
    dispatch({
      type: GET_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem("offset=0")),
    });
    return;
  }

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
    );

    dispatch({
      type: GET_POKEMONES_EXITO,
      payload: res.data,
    });
    //Sirve para guardar en el localStorage(en el browser) el resultado. Recibe un identificados y lo que va almacenar
    localStorage.setItem("offset=0", JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const siguientePokemonAccion = () => async (dispatch, getState) => {
  //encerrando la variable en llaves accedo a la propiedad del objeto pokemones
  //pokemones viene del store
  const { next } = getState().pokemones;

  if (localStorage.getItem(next)) {
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem(next)),
    });
    return;
  }

  try {
    const res = await axios.get(next);

    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: res.data,
    });

    localStorage.setItem(next, JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const anteriorPokemonAccion = () => async (dispatch, getState) => {
  //encerrando la variable en llaves accedo a la propiedad del objeto pokemones
  //pokemones viene del store
  const { previous } = getState().pokemones;

  if (localStorage.getItem(previous)) {
    dispatch({
      type: ANTERIOR_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem(previous)),
    });
    return;
  }

  try {
    const res = await axios.get(previous);

    dispatch({
      type: ANTERIOR_POKEMONES_EXITO,
      payload: res.data,
    });

    localStorage.setItem(previous, JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};
