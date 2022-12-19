import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Button from "./button";
import { capitalizeFirstLetter } from "../utils";
import { useNavigate } from "react-router-dom";
import { setSelectedFlight } from "../storage/actions";

function FlightCard({ flightCategory, selectedTab, flightInfo }) {
  const { brandCode, price, rights } = flightCategory;
  const { isPromotionActive, queryFlightPassengerAmount } = useSelector(
    (state) => state.reducer
  );
  const navigate = useNavigate();

  const isButtonDisable =
    isPromotionActive &&
    ((brandCode !== "ecoFly" && selectedTab === "ECONOMY") ||
      selectedTab === "BUSINESS");

  const buttonOnClickHandle = () => {
    const selectedFlight = {
      ...flightInfo,
      ...flightCategory,
      numberOfPassengers: queryFlightPassengerAmount,
      selectedTab: selectedTab,
    };
    setSelectedFlight(selectedFlight);
    navigate("/flight-selection-result");
  };

  return (
    <div className="card-wrapper">
      <div className="card-title">
        <span className="title">{capitalizeFirstLetter(brandCode)}</span>
        <span className="price">
          <span className="currency">{price.currency}</span>
          <span>{price.amount}</span>
        </span>
      </div>
      <div className="card-content">
        {rights &&
          rights.map((r, i) => (
            <div className="right" key={i}>
              <span>{r}</span>
            </div>
          ))}
      </div>
      <Button
        content="Uçuşu Seç"
        disable={isButtonDisable}
        onClickAction={buttonOnClickHandle}
      />
    </div>
  );
}

FlightCard.propTypes = {
  flightCategory: PropTypes.object,
  selectedTab: PropTypes.string,
  flightInfo: PropTypes.object,
};

export default FlightCard;
