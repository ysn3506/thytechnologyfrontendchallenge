import React, { useState } from "react";
import PropTypes from "prop-types";
import FlightDetails from "./flight-details";
import FlightInfo from "./flight-info";
import FlightCardsGroup from "./flight-cards-group";

const FlightResult = ({ flightInfo }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [tabContent, setTabContent] = useState([]);
  const [selectedTab, setSelectedTab] = useState();

  const handleClick = (tab, content) => {
    if (!isClicked) {
      setSelectedTab(tab);
    } else {
      selectedTab === tab ? setSelectedTab() : setSelectedTab(tab);
    }

    if (isClicked && selectedTab !== tab) {
      setIsClicked(true);
    } else {
      setIsClicked(!isClicked);
    }

    setTabContent(content);
  };
  return (
    <div className="flight-result">
      <div className="result-wrapper">
        <FlightInfo flightInfo={flightInfo} />
        <FlightDetails
          flightInfo={flightInfo}
          handleClick={handleClick}
          selected={selectedTab}
        />
      </div>
      <FlightCardsGroup isShown={isClicked} categories={tabContent} />
    </div>
  );
};

FlightResult.propTypes = {
  flightInfo: PropTypes.object,
};

export default FlightResult;
