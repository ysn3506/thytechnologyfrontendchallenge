import React from "react";
import PropTypes from "prop-types";
import FlightCard from "./flight-card";
import { Transition } from "react-transition-group";

function FlightCardsGroup({ categories, isShown, selectedTab, flightInfo }) {
  const transitionStyles = {
    entering: {
      height: "0px",
      display: "grid",
      opacity: 0,
      "margin-top": "-2.25rem",
    },
    entered: { height: "95%", display: "grid", opacity: 1 },
    exiting: { height: "0%", display: "grid", opacity: 0 },
    exited: { height: "0%", display: "none", opacity: 0 },
  };

  return (
    <Transition in={isShown} timeout={300} appear>
      {(state) => (
        <div className="cards-group " style={{ ...transitionStyles[state] }}>
          {categories &&
            categories.map((cat, i) => (
              <FlightCard
                key={i}
                flightCategory={cat}
                selectedTab={selectedTab}
                flightInfo={flightInfo}
              />
            ))}
        </div>
      )}
    </Transition>
  );
}

FlightCardsGroup.propTypes = {
  categories: PropTypes.array,
  isShown: PropTypes.bool,
  selectedTab: PropTypes.string,
  flightInfo: PropTypes.object,
};

export default FlightCardsGroup;
