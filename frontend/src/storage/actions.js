import { store } from "./store";

import { SET_DARK_MODE } from "./contants";


const callAction = (type, data) =>
  store.dispatch({ type: type, payload: data });



export const setDarkMode = (bool) => callAction(SET_DARK_MODE, bool);










