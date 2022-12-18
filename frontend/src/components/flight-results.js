import React from "react";
import { useSelector } from "react-redux";
import Button from "./button";
import FlightResult from "./flight-result";
import LoadingSpinner from "./loading-spinner";

function FlightResults() {
  const queryResults = useSelector((state) => state.reducer.queryResults);

  return (
    <div className="flight-results-wrapper">
      <div className="flight-results-header">
        <span>Sıralama Kriteri</span>
        <Button content="Ekonomi Ücreti" />
        <Button content="Kalkış Saati" />
      </div>
      <div className="flight-results-content">
        {queryResults.length===0 && <LoadingSpinner/>}
        {queryResults.map((el, i) => (
          <FlightResult key={i} flightInfo={el} />
        ))}
      </div>
    </div>
  );
}

export default FlightResults;
