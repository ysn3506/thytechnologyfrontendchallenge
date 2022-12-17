import React from 'react';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from '../utils';

FlightQuerySummary.propTypes = {
    
};

function FlightQuerySummary({from, to, passengerAmount}) {
    return (
      <div className="flight-query-summary">
        <span className="title">Uçuş</span>
        <div className="from-to">
          <span>{capitalizeFirstLetter(from)}</span> -{" "}
          <span>{capitalizeFirstLetter(to)}</span>,{" "}
          <span>{passengerAmount} Yolcu</span>
        </div>
      </div>
    );
}

FlightQuerySummary.propTypes = {
    from: PropTypes.string,
    to: PropTypes.string,
    passengerAmount:PropTypes.number
}

export default FlightQuerySummary;