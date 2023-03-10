import { store } from "./store";

import {
  SET_DARK_MODE,
  SET_DEPARTURE,
  SET_ARRIVALS,
  SET_NUMBER_OF_PASSENGER,
  SET_QUERY_RESULTS,
  SET_PROMOTION_TOGGLE,
  SET_SORT_TYPE,
  SET_SELECTED_FLIGHT,
} from "./contants";


const callAction = (type, data) =>
  store.dispatch({ type: type, payload: data });

export const setDarkMode = (bool) => callAction(SET_DARK_MODE, bool);
export const setDeparture = (data) => callAction(SET_DEPARTURE, data);
export const setArrivals = (data) => callAction(SET_ARRIVALS, data);
export const setPassengerNumber = (number) => callAction(SET_NUMBER_OF_PASSENGER, number);
export const setQueryResults = (arr) => callAction(SET_QUERY_RESULTS, arr);
export const setPromotionToggle = (bool) => callAction(SET_PROMOTION_TOGGLE, bool);
export const setSortType = (data) => callAction(SET_SORT_TYPE, data);
export const setSelectedFlight = (data) => callAction(SET_SELECTED_FLIGHT, data);










