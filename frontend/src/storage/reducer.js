import { getFromLocalStorage } from "../utils";
import {
  SET_ARRIVALS,
  SET_DARK_MODE,
  SET_DEPARTURE,
  SET_NUMBER_OF_PASSENGER,
  SET_QUERY_RESULTS,
  SET_SELECTED_FLIGHT,
} from "./contants";

// These are created for the UX, if user had flight search previously, departure city and number of passengers will be loaded automatically.
const prevFlightFrom = getFromLocalStorage("queryFlightFrom");
const prevNumberOfPassengers = getFromLocalStorage(
  "queryFlightPassengerAmount"
);

const initialState = {
  darkMode: false,
  queryFlightFrom: prevFlightFrom,
  queryFlightTo: "",
  queryFlightPassengerAmount: Number(prevNumberOfPassengers) || 1,
  queryResults: [],
  selectedFlight: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return { ...state, darkMode: action.payload };
    case SET_DEPARTURE:
      return { ...state, queryFlightFrom: action.payload };
    case SET_ARRIVALS:
      return { ...state, queryFlightTo: action.payload };
    case SET_NUMBER_OF_PASSENGER:
      return { ...state, queryFlightPassengerAmount: action.payload };
    case SET_SELECTED_FLIGHT:
      return { ...state, selectedFlight: action.payload };
    case SET_QUERY_RESULTS:
      return { ...state, queryResults: action.payload };
    default:
      return state;
  }
};
