import React, { useEffect, useState } from "react";
import FlightSearchInputGroup from "../components/flight-search-input-group";
import NoFlight from "../components/flight-search-input-group/no-flight";
import { setDarkMode } from "../storage/actions";

const FlightSearch = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showNoFlight, setShowNoFlight] = useState(false);

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

  const showNoFlightModal = () => setShowNoFlight(true);
  const hideNoFlightModal = () => setShowNoFlight(false);

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
          showNoFlightModal={showNoFlightModal}
        />
        {showNoFlight && <NoFlight hideMessage={hideNoFlightModal} />}
      </div>
    </div>
  );
};

export default FlightSearch;
