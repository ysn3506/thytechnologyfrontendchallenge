import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../button";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

const Popup = ({ isHidden }) => {
    const [passengerNumber, setPassengerNumber] = useState(1);
    
    const incrementPassenger = () => {
        setPassengerNumber(passengerNumber + 1);
    }
    const decrementPasssengerNumber = () => {
      if(passengerNumber>1)  setPassengerNumber(passengerNumber - 1);
    }
  return (
    <div className={`popup ${!isHidden && "show"}`}>
      <h2>Kabin ve Yolcu Seçimi</h2>
      <div className="radio-button-group">
        <div className="radio-button-wrapper">
          <input type="radio" id="economy" name="economy" value="economoy" />
          <label htmlFor="economy">Economy Class</label>
        </div>
        <div className="radio-button-wrapper">
          <input type="radio" id="business" name="business" value="business" />
          <label htmlFor="business">Business Class</label>
        </div>
      </div>
      <div className="passenger-amount">
        <span>Yolcu</span>
        <div className="passenger-amount-action">
          <Button onClickAction={decrementPasssengerNumber} icon={minus} />
          <span>{passengerNumber}</span>
          <Button onClickAction={incrementPassenger} icon={plus} />
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
    isHidden:PropTypes.bool
};

Popup.defaultProps = {
    isHidden: true
}

export default Popup;
