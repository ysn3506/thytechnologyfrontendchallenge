import React from "react";
import PropTypes from "prop-types";
import FlightCard from "./flight-card";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function FlightCardsGroup({ categories, isShown }) {
    return (
      <SwitchTransition>
        <CSSTransition key={isShown} classNames="fade" timeout={200}>
          <div className={`cards-group ${isShown && "show"}`}>
            {categories &&
              categories.map((cat, i) => (
                <FlightCard key={i} flightCategory={cat} />
              ))}
          </div>
        </CSSTransition>
      </SwitchTransition>
    );
}

FlightCardsGroup.propTypes = {
  categories: PropTypes.array,
  isShown: PropTypes.bool,
};

export default FlightCardsGroup;
