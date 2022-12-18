import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Transition } from "react-transition-group";

function ToggleInfo({ children }) {
  const transitionStyles = {
    entering: {
      height: "0px",
      opacity: "0",
    },
    entered: { height: "auto", opacity: "1" },
    exiting: { height: "auto", opacity: "0" },
    exited: { height: "0px", opacity: "0" },
  };
  const isPromotionActive = useSelector(
    (state) => state.reducer.isPromotionActive
  );
  return (
    <Transition in={isPromotionActive} timeout={300} appear>
      {(state) => (
        <div className="toggle-info" style={{ ...transitionStyles[state] }}>
          {children}
        </div>
      )}
    </Transition>
  );
}
ToggleInfo.propTypes = {
  children: PropTypes.any,
};

export default ToggleInfo;
