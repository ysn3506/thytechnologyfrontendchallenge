import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const darkMode = useSelector((state) => state.reducer.darkMode);

  return (
    <div className="header-wrapper">
      <div className={`header ${darkMode &&"dark"}`}>
        <a href="https://turkishairlines.com">turkishairlines.com</a>
        <span>
          <span className="thin">search</span>Flight Challenge
        </span>
      </div>
      <div className={`line ${darkMode && "dark"}`}></div>
    </div>
  );
};

export default Header;
