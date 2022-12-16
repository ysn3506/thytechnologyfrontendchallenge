import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import arrivals from "../../assets/arrivals.png";
import departures from "../../assets/departures.png";
import calendar from "../../assets/calendar.png";
import man from "../../assets/man.png";
import arrow from "../../assets/arrow.png";
import Button from "../button";
import SearchInput from "../input";
import Popup from "./popup";

const FlightSearchInputGroup = () => {
  const numberOfPassenger = useSelector(
    (state) => state.reducer.queryFlightPassengerAmount
  );

  const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        
        
    },[])

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="search-input-group-wrapper">
      <SearchInput
        placeholder="Nereden"
        icon={departures}
              classess="search-input"
      />
      <div className="ui left icon input">
        <input type="text" placeholder="Nereye" />
        <img className="icon" src={arrivals} />
      </div>
      <Button icon={calendar} content="Tarih" classes="search-input-button" />
      <Button
        icon={man}
        content={numberOfPassenger}
        classes="search-input-button passenger"
        onClickAction={togglePopup}
        iconRepeat={numberOfPassenger}
      />
      <Button icon={arrow} classes="search-input-button navigate" />
      <Popup isShown={showPopup} />
    </div>
  );
};

export default FlightSearchInputGroup;
