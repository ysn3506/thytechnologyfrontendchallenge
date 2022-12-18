import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import arrivals from "../../assets/arrivals.png";
import departures from "../../assets/departures.png";
import calendar from "../../assets/calendar.png";
import man from "../../assets/man.png";
import arrow from "../../assets/arrow.png";
import Button from "../button";
import SearchInput from "../input";
import Popup from "./popup";
import { getArrivals, getDepartures, getFlights } from "../../services/apis";
import CityList from "./city-list";
import {
  setArrivals,
  setDeparture,
  setQueryResults,
} from "../../storage/actions";
import { capitalizeFirstLetter, saveToLocalStorage } from "../../utils";

const FlightSearchInputGroup = ({
  isPopupShown,
  togglePopup,
  showNoFlightModal,
}) => {
  const numberOfPassenger = useSelector(
    (state) => state.reducer.queryFlightPassengerAmount
  );
  const flightFrom = useSelector((state) => state.reducer.queryFlightFrom);
  const flightTo = useSelector((state) => state.reducer.queryFlightTo);
  const passengerAmount = useSelector((state) => state.reducer.queryFlightPassengerAmount);

  const [departureCity, setDepartureCity] = useState(flightFrom);
  const [arrivalCity, setArrivalCity] = useState(flightTo);
  const [departureCityLoading, setDepartureCityLoading] = useState(false);
  const [citiesForDeparture, setCitiesForDeparture] = useState([]);
  const [citiesForArrivals, setCitiesForArrivals] = useState([]);
  const [arrivalCityLoading, setArrivalCityLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDepartureInputFocused, setDepartureFocused] = useState(false)
  const [isArrivalInputFocused, setArrivalFocused] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    departureInputOnBlur();
  }, [])
  
  useEffect(() => {
    if (errorMessage.length > 0) setErrorMessage("");
    if (departureCity.length >= 3  && isDepartureInputFocused) {
      setDepartureCityLoading(true);
      getDepartures(departureCity)
        .then((resp) => setCitiesForDeparture(resp))
        .then(() => setDepartureCityLoading(false))
        .catch((err) => {
          throw err;
        });
    } else {
      if (departureCity.length === 0) setDepartureCityLoading(false);
      setCitiesForDeparture([]);
    }
  }, [departureCity]);

  useEffect(() => {
    if (errorMessage.length > 0) setErrorMessage("");
    if (arrivalCity.length >= 3 && isArrivalInputFocused) {
      setArrivalCityLoading(true);
      getArrivals(arrivalCity)
        .then((resp) => {
          setCitiesForArrivals(resp);

        })
        .then(() => setArrivalCityLoading(false))
        .catch((err) => {
          throw err;
        });
    } else {
      if (arrivalCity.length === 0) setArrivalCityLoading(false);
      setCitiesForArrivals([]);
    }
  }, [arrivalCity]);

  const departureInputHandle = (e) => {
    setDepartureCity(e.target.value);
    setDeparture(e.target.value.toLowerCase());
  };

  const arrivalInputHandle = (e) => {
    setArrivalCity(e.target.value);
    setArrivals(e.target.value.toLowerCase());
  };

  const departureInputOnBlur = () => {
    setTimeout(() => {
        setDepartureFocused(false);
      setCitiesForDeparture([]);
      clearTimeout();
    }, 200);
  };
  const arrivalInputOnBlur = () => {
    setTimeout(() => {
      setArrivalFocused(false)
      setCitiesForArrivals([]);
      clearTimeout();
    }, 200);
  };

  const departureInputOnFocus = () => {
    setDepartureFocused(true);
  }

  const arrivalInputOnFocus = () => {
    setArrivalFocused(true)
  }

  const onDepartureListSelect = (city) => {
    setDepartureCity(city);
    setDeparture(city.toLowerCase());
    departureInputOnBlur();
  };

  const onArrivalListSelect = (city) => {
    setArrivalCity(city);
    setArrivals(city.toLowerCase());
    arrivalInputOnBlur();
  };

  const findFlights = () => {
    if (flightFrom.length === 0 || flightTo.length === 0) {
      setErrorMessage("Lütfen İlgili Alanları Doldurup Tekrar Deneyiniz.");
      return;
    } else {
      getFlights(
        capitalizeFirstLetter(flightFrom),
        capitalizeFirstLetter(flightTo)
      ).then((resp) => {
        if (resp.length === 0) {
          showNoFlightModal()
        } else {
          // if user succeed to go to flight selection page, flight from and number of passenger variables will be stored in localstorage for the next visit
          saveToLocalStorage("queryFlightFrom", flightFrom)
          saveToLocalStorage("queryFlightPassengerAmount", passengerAmount);
          setQueryResults(resp);
          setErrorMessage("");
          navigate("/flight-selection");
        }
      });
    }
  };

  return (
    <div className="search-input-group-wrapper">
      <SearchInput
        placeholder="Nereden"
        icon={departures}
        classess="search-input"
        onChange={departureInputHandle}
        isLoading={departureCityLoading}
        value={departureCity}
        onBlur={departureInputOnBlur}
        onFocus={departureInputOnFocus}
      />
      <CityList
        list={citiesForDeparture}
        isLoading={departureCityLoading}
        isShown={citiesForDeparture.length > 0}
        isDeparture
        onSelection={onDepartureListSelect}
      />
      <SearchInput
        placeholder="Nereye"
        icon={arrivals}
        classess="search-input"
        onChange={arrivalInputHandle}
        isLoading={arrivalCityLoading}
        value={arrivalCity}
        onBlur={arrivalInputOnBlur}
        onFocus={arrivalInputOnFocus}
      />
      <CityList
        list={citiesForArrivals}
        isLoading={arrivalCityLoading}
        isShown={citiesForArrivals.length > 0}
        isDeparture={false}
        onSelection={onArrivalListSelect}
      />
      <Button icon={calendar} content="Tarih" classes="search-input-button" />
      <Button
        icon={man}
        content={numberOfPassenger}
        classes="search-input-button passenger"
        onClickAction={togglePopup}
        iconRepeat={numberOfPassenger}
      />
      <Button
        icon={arrow}
        classes="search-input-button navigate"
        onClickAction={findFlights}
      />
      <Popup isShown={isPopupShown} />
      {errorMessage.length > 0 && (
        <div className="error-wrapper">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

FlightSearchInputGroup.propTypes = {
  isPopupShown: PropTypes.bool,
  togglePopup: PropTypes.func,
  showNoFlightModal:PropTypes.func,
};

export default FlightSearchInputGroup;
