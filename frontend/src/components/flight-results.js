import React from 'react';
import { useSelector } from 'react-redux';
import Button from './button';
import FlightInfo from './flight-info';


function FlightResults() {
    const queryResults = useSelector(state => state.reducer.queryResults);

    return (
      <div className="flight-results-wrapper">
        <div className="flight-results-header">
          <span>Sıralama Kriteri</span>
          <Button content="Ekonomi Ücreti" />
          <Button content="Kalkış Saati" />
        </div>
        <div className="flight-results-content">
          {queryResults.map((el, i) => (
            <div key={i}>
              <FlightInfo flightInfo={el} />
            </div>
          ))}
        </div>
      </div>
    );
}

export default FlightResults;