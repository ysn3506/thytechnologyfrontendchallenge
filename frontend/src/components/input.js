import React from 'react';
import PropTypes from 'prop-types';



function SearchInput({placeholder, classess, icon, }) {
    return (
      <div className={`input ${classess}`}>
        <input type="text" placeholder={placeholder}/>
        <img className="icon" src={icon} />
      </div>
    );
}


SearchInput.propTypes = {
    placeholder: PropTypes.string,
    classess: PropTypes.string,
    icon:PropTypes.string,
};

export default SearchInput;