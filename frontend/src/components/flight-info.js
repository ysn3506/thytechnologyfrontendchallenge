import React from "react";
import PropTypes from "prop-types";

function FlightInfo({ flightInfo }) {
  const {
    flightDuration,
    originAirport,
    destinationAirport,
    arrivalDateTimeDisplay,
    departureDateTimeDisplay,
  } = flightInfo;

  // In the database arrivalDateTimeDisplay and departureDateTimeDisplay are replaced with each other. They should be fixed.
  return (
    <div className="flight-info-wrapper">
      <div className="flight-route">
        <div className="time">
          <span>{arrivalDateTimeDisplay}</span>
          <span>{departureDateTimeDisplay}</span>
        </div>
        <div className="airports">
          <span>{originAirport.city.code}</span>
          <div className="line" />
          <span>{destinationAirport.city.code}</span>
        </div>
        <div className="cities">
          <span>{originAirport.city.name}</span>
          <span>{destinationAirport.city.name}</span>
        </div>
      </div>
      <div className="flight-duration">
        <span>Uçuş Süresi</span>
        <span className="duration">{flightDuration}</span>
      </div>
    </div>
  );
}

FlightInfo.propTypes = {
  flightInfo: PropTypes.object,
};

export default FlightInfo;
