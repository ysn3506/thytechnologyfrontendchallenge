import React from "react";
import PropTypes from "prop-types";

const Button = ({ classes, onClickAction, icon, content, iconRepeat }) => {
  const repeatAmount = iconRepeat <= 3 ? iconRepeat : 3;
  const iconElements = Array(repeatAmount).fill(icon);
  return (
    <button className={`button ${classes}`} onClick={onClickAction}>
      <span> {content}</span>
      {iconElements.map((el,i) => <img key={i} src={el} />)}
      {iconRepeat > 3 && <span className="plus-icons">+</span>}
    </button>
  );
};

Button.propTypes = {
  classes: PropTypes.string,
  onClickAction: PropTypes.func,
  icon: PropTypes.any,
  content: PropTypes.any,
  iconRepeat: PropTypes.number,
};

Button.defaultProps = {
  classes: "",
  onClickAction: undefined,
  icon: undefined,
  content: "",
  iconRepeat: 1,
};

export default Button;
