import API from "./api-base";
import { getUniqueResults } from "../utils";

// These operations such as filtering, sorting, etc. are the feature of JSON-SERVER.

const getQueryResult = async (query) =>
  API.get(`/flights?q=${query.toLowerCase()}`);

export const getDepartures = async (query) => {
  try {
      const response = await getQueryResult(query);
    const duplicatedDepartures = await response.data.map(
      (el) => el?.originAirport?.city?.name
    );
    return getUniqueResults(duplicatedDepartures);
  } catch (error) {
    console.error(error)
  }
};

export const getArrivals = async (query) => {
  try {
    const response = await getQueryResult(query);
    const duplicatedArrivals = await response.data.map(
      (el) => el?.destinationAirport?.city?.name
    );
    return getUniqueResults(duplicatedArrivals);
  } catch (error) {
     console.error(error);
  }
};

export const getFlights = async (departure, arrival) => {
  try {
    const response = await API.get(
      `/flights?originAirport.city.name=${departure}&destinationAirport.city.name=${arrival}`
    );
    return response.data;
  } catch (error) {
     console.error(error);
  }
};
