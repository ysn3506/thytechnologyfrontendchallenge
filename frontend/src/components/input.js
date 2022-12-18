import React from "react";
import PropTypes from "prop-types";
import airplane from "../assets/airplane.gif";
import { capitalizeFirstLetter } from "../utils";

function SearchInput({
  placeholder,
  classess,
  icon,
  onChange,
  isLoading,
  value,
  onBlur,
  onFocus
  
}) {
  return (
    <div className={`input ${classess}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={capitalizeFirstLetter(value)}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
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
  onFocus: PropTypes.func,
};

SearchInput.defaultProps = {
  classes: "",
  icon: "",
  onChange: undefined,
  isLoading: false,
  value: "",
  onBlur: undefined,
  onFocus:undefined
};

export default SearchInput;
