import React from 'react';
import PropTypes from 'prop-types';

const Button = ({classes, onClickAction, icon, content}) => {
    return (
      <button className={`button ${classes}`} onClick={onClickAction}>
        <span> {content}</span>
        <img src={icon} />
      </button>
    );
};

Button.propTypes = {
    classes: PropTypes.string,
    onClickAction: PropTypes.function,
    icon: PropTypes.any,
    content:PropTypes.string

};

Button.defaultProps = {
    classes:"",
    onClickAction: undefined,
    icon: undefined,
    content:""
    
}

export default Button;