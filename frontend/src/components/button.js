import React from "react";
import PropTypes from "prop-types";

const Button = ({ classes, onClickAction, icon, content, iconRepeat }) => {
  const repeatAmount = iconRepeat <= 3 ? iconRepeat : 3;
  const iconElements=Array(repeatAmount).fill(<img src={icon}/>)
  return (
    <button className={`button ${classes}`} onClick={onClickAction}>
      <span> {content}</span>
      {iconElements.map(el => el)}
      {iconRepeat>3 && <span className="plus-icons">+</span>}
     
    </button>
  );
};

Button.propTypes = {
  classes: PropTypes.string,
  onClickAction: PropTypes.function,
  icon: PropTypes.any,
  content: PropTypes.string,
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
