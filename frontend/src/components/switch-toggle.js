import React from "react";
import PropTypes from "prop-types";

function SwitchToggle({ label, toggleMethod }) {
  return (
    <div className="toggle-wrapper">
      <span className="toggle-label">{label}</span>
      <label className="switch">
        <input type="checkbox" onChange={toggleMethod} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

SwitchToggle.propTypes = {
  label: PropTypes.string,
  toggleMethod: PropTypes.func,
};

export default SwitchToggle;
