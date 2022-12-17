import React from "react";
import PropTypes from "prop-types";

const CityList = ({ list, isShown, isDeparture, onSelection }) => {
  return (
    <div
      className={`city-list ${isDeparture && "departure"} ${isShown && "show"}`}
    >
      {list &&
        list.map((el) => (
          <div key={el} onClick={() => onSelection(el.toLowerCase())}>
            <span>{el}</span>
            <hr />
          </div>
        ))}
    </div>
  );
};

CityList.propTypes = {
  list: PropTypes.array.isRequired,
  isShown: PropTypes.bool,
  isDeparture: PropTypes.bool,
  onSelection: PropTypes.func,
};
CityList.defaultProps = {
  isShown: true,
  isDeparture: false,
  onSelection: undefined,
};

export default CityList;
