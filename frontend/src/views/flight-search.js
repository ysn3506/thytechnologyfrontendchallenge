import React, { useEffect } from "react";
import FlightSearchInputGroup from "../components/flight-search-input-group";
import { setDarkMode } from "../storage/actions";

const FlightSearch = () => {
  useEffect(() => {
    setDarkMode(true);
  }, []);
  return (
    <div className="flight-search-layout">
      <div className="layout-wrapper">
        <div className="title-wrapper">
          <h1>Merhaba</h1>
          <h1>Nereyi Keşfetmek İstersiniz?</h1>
        </div>
        <FlightSearchInputGroup />
      </div>
    </div>
  );
};

export default FlightSearch;
