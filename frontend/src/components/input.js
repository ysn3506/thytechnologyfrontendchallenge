import React from "react";
import PropTypes from "prop-types";
import airplane from "../assets/airplane.gif";

function SearchInput({
  placeholder,
  classess,
  icon,
  onChange,
  isLoading,
  value,
  onBlur,
}) {
  return (
    <div className={`input ${classess}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value.toUpperCase()}
        onChange={onChange}
        onBlur={onBlur}
      />
      <img className="icon" src={isLoading ? airplane : icon} />
    </div>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  classess: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  value: PropTypes.string,
  onBlur: PropTypes.func,
};

SearchInput.defaultProps = {
  classes: "",
  icon: "",
  onChange: undefined,
  isLoading: false,
  value: "",
  onBlur: undefined,
};

export default SearchInput;
