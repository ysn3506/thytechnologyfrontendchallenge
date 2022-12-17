import React, { useEffect, useState } from "react";
import FlightSearchInputGroup from "../components/flight-search-input-group";
import { setDarkMode } from "../storage/actions";

const FlightSearch = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setDarkMode(true);
  }, []);

  const closePassengerPopUp = () => {
    if (showPopup) setShowPopup(false);
  };

  const togglePopup = (e) => {
    e.stopPropagation();
    setShowPopup(!showPopup);
  };

  return (
    <div className="flight-search-layout" onClick={closePassengerPopUp}>
      <div className="layout-wrapper">
        <div className="title-wrapper">
          <h1>Merhaba</h1>
          <h1>Nereyi Keşfetmek İstersiniz?</h1>
        </div>
        <FlightSearchInputGroup
          togglePopup={togglePopup}
          isPopupShown={showPopup}
        />
      </div>
    </div>
  );
};

export default FlightSearch;
