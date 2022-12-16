import React,{useState} from "react";
import arrivals from "../../assets/arrivals.png";
import departures from "../../assets/departures.png";
import calendar from "../../assets/calendar.png";
import man from "../../assets/man.png";
import arrow from "../../assets/arrow.png";
import Button from "../button";
import SearchInput from "../input";
import Popup from "./popup";

const FlightSearchInputGroup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);

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
        content="1"
        classes="search-input-button passenger"
        onClickAction={togglePopup}
      />
      <Button icon={arrow} classes="search-input-button navigate" />
      <Popup isHidden={showPopup} />
    </div>
  );
};

export default FlightSearchInputGroup;
