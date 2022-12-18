import React, { useState } from "react";
import PropTypes from "prop-types";
import arrow from "../assets/down-arrow.png";

function FlightDetails({ flightInfo }) {
  const [selectedTab, setSelectedTab] = useState();
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
                onClick={() => setSelectedTab(el)}
              >
                <div className="category-wrapper">
                  <div className="radio-button-wrapper">
                    <input
                      type="radio"
                      id={el}
                      name={el}
                      value={el}
                      checked={selectedTab === el}
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
                        <img src={arrow} alt="arrow"/>
                    </div>
              </div>
            );
          })}

      <div className="card-group"></div>
    </div>
  );
}

FlightDetails.propTypes = {
  flightInfo: PropTypes.object,
};

export default FlightDetails;
