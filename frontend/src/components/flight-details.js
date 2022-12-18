import React from "react";
import PropTypes from "prop-types";
import arrow from "../assets/down-arrow.png";


function FlightDetails({ flightInfo, selected, handleClick }) {
  const { fareCategories } = flightInfo;

  return (
    <div className="flight-details-wrapper">
      {fareCategories &&
        Object.keys(fareCategories)
          .reverse()
          .map((el) => {
            const planToShow = fareCategories[el]?.subcategories.find(
              (el) => el?.brandCode === "ecoFly"
            );
            return (
              <div
                key={el}
                className="category"
                onClick={() =>
                  handleClick(el, fareCategories[el]?.subcategories)
                }
              >
                <div className="category-wrapper">
                  <div className="radio-button-wrapper">
                    <input
                      type="radio"
                      id={el}
                      name={el}
                      value={el}
                      checked={selected === el}
                    />
                    <label htmlFor="economy">{el}</label>
                  </div>
                  <div className="price">
                    <span>Yolcu Başına</span>
                    <span className="amount">
                      {planToShow.price.currency} {planToShow.price.amount}
                    </span>
                  </div>
                </div>
                <div className="accordion-arrow">
                  <img className={`arrow-image ${selected===el && "selected"}`} src={arrow} alt="arrow" />
                </div>
              </div>
            );
          })}
    </div>
  );
}

FlightDetails.propTypes = {
    flightInfo: PropTypes.object,
    selected: PropTypes.string,
    handleClick:PropTypes.func
};

export default FlightDetails;
