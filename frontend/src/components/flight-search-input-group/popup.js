import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Button from "../button";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";
import { setPassengerNumber } from "../../storage/actions";

const Popup = ({ isShown }) => {
  const numberOfPassenger = useSelector(
    (state) => state.reducer.queryFlightPassengerAmount
  );

  const incrementPassenger = () => {
    setPassengerNumber(numberOfPassenger + 1);
  };
  const decrementPasssengerNumber = () => {
    if (numberOfPassenger > 1) setPassengerNumber(numberOfPassenger - 1);
  };

  return (
    <div
      className={`popup ${isShown && "show"}`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
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
          <span>{numberOfPassenger}</span>
          <Button onClickAction={incrementPassenger} icon={plus} />
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  isShown: PropTypes.bool,
};

Popup.defaultProps = {
  isShown: true,
};

export default Popup;
