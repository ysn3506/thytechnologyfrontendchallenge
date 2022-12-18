import React from "react";
import PropTypes from "prop-types";
import FlightCard from "./flight-card";
import { Transition } from "react-transition-group";

function FlightCardsGroup({ categories, isShown }) {
  const transitionStyles = {
    entering: {
      height: "0px",
      display: "grid",
      opacity: 0,
      "margin-top": "-2.25rem",
    },
    entered: { height: "300px", display: "grid", opacity: 1 },
    exiting: { height: "0px", display: "grid", opacity: 0 },
    exited: { height: "0px", display: "none", opacity: 0 },
  };

  return (
    <Transition in={isShown} classNames="show" timeout={300} appear>
      {(state) => (
        <div className="cards-group " style={{ ...transitionStyles[state] }}>
          {categories &&
            categories.map((cat, i) => (
              <FlightCard key={i} flightCategory={cat} />
            ))}
        </div>
      )}
    </Transition>
  );
}

FlightCardsGroup.propTypes = {
  categories: PropTypes.array,
  isShown: PropTypes.bool,
};

export default FlightCardsGroup;
