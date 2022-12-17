import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { setDarkMode } from "../storage/actions";
import FlightQuerySummary from "../components/flight-query-summary";
import SwitchToggle from "../components/switch-toggle";
import FlightResults from "../components/flight-results";

const FlightSelection = () => {
  const {
    queryFlightFrom,
    queryFlightTo,
    queryFlightPassengerAmount,
    queryResults,
  } = useSelector((state) => state.reducer);

  useEffect(() => {
    setDarkMode(false);
  }, []);

  console.log(queryResults);
  return (
    <div className="flight-selection-view">
      <FlightQuerySummary
        from={queryFlightFrom}
        to={queryFlightTo}
        passengerAmount={queryFlightPassengerAmount}
      />
          <SwitchToggle label="Promosyon Kodu" />
          <FlightResults/>
    </div>
  );
};

export default FlightSelection;
