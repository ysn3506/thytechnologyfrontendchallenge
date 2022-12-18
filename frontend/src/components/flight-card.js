import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Button from "./button";
import { capitalizeFirstLetter } from "../utils";

function FlightCard({ flightCategory, selectedTab }) {
  const { brandCode, price, rights } = flightCategory;
  const isPromotionActive = useSelector(state => state.reducer.isPromotionActive);
  const isButtonDisable = isPromotionActive && ((brandCode !== "ecoFly" && selectedTab === "ECONOMY")||(selectedTab==="BUSINESS"));
  console.log(selectedTab)
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
      <Button content="Uçuşu Seç" disable={isButtonDisable}/>
    </div>
  );
}

FlightCard.propTypes = {
  flightCategory: PropTypes.object,
  selectedTab:PropTypes.string
};

export default FlightCard;
