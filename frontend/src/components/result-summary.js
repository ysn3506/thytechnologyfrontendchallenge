import React from "react";
import PropTypes from "prop-types";
import FlightQuerySummary from "./flight-query-summary";
import FlightInfo from "./flight-info";
import FlightCard from "./flight-card";

function ResultSummary({ summary }) {
  const {
    originAirport,
    destinationAirport,
    numberOfPassengers,
    brandCode,
    price,
    rights,
  } = summary;
    
  return (
    <div className="result-summary-wrapper">
      <h2>İşlem Özeti</h2>
      <div className="result-detail">
        <div>
          <FlightQuerySummary
            from={originAirport.city.name}
            to={destinationAirport.city.name}
            passengerAmount={numberOfPassengers}
          />
          <FlightInfo flightInfo={summary} />
        </div>
        <FlightCard
          flightCategory={{ brandCode, price, rights }}
          flightInfo={summary}
          selectedTab={summary.selectedTab}
        />
      </div>
    </div>
  );
}

ResultSummary.propTypes = {
  summary: PropTypes.object,
};

export default ResultSummary;
