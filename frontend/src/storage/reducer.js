import {
  SET_ARRIVALS,
  SET_DARK_MODE,
  SET_DEPARTURE,
  SET_NUMBER_OF_PASSENGER,
  SET_SELECTED_FLIGHT,
} from "./contants";

const initialState = {
  darkMode: false,
  queryFlightFrom: "",
  queryFlightTo: "",
  queryFlightPassengerAmount: 1,
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
    default:
      return state;
  }
};
