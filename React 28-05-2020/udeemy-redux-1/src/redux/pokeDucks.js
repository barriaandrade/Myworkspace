import axios from "axios";

// constantes
const dataInicial = {
  array: [],
};

const GET_POKEMONES_EXITO = "GET_POKEMONES_EXITO";
// reducer
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_POKEMONES_EXITO:
      return { ...state, array: action.payload };

    default:
      return state;
  }
}
// actions
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );

    dispatch({
      type: GET_POKEMONES_EXITO,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
