import React from "react";
import { useSelector } from "react-redux";
import { setSortType } from "../storage/actions";
import Button from "./button";
import FlightResult from "./flight-result";
import LoadingSpinner from "./loading-spinner";
import { setQueryResults } from "../storage/actions";
import { getFlights } from "../services/apis";
import { capitalizeFirstLetter } from "../utils";

function FlightResults() {
  const {
    queryResults,
    sortType,
    isPromotionActive,
    queryFlightFrom,
    queryFlightTo,
  } = useSelector((state) => state.reducer);

  const sortFlights = (sortingType) => {
    setSortType(sortingType);
    if (isPromotionActive) {
      getFlights(
        capitalizeFirstLetter(queryFlightFrom),
        capitalizeFirstLetter(queryFlightTo),
        sortingType
      )
        .then((resp) => {
          resp.forEach((element) => {
            const ecoFly = element.fareCategories.ECONOMY.subcategories.find(
              (cat) => cat.brandCode === "ecoFly"
            );
            ecoFly.price.amount = Math.floor(ecoFly.price.amount / 2);
          });

          setQueryResults(resp);
        })
        .catch((err) => {
          throw err;
        });
    } else {
      getFlights(
        capitalizeFirstLetter(queryFlightFrom),
        capitalizeFirstLetter(queryFlightTo),
        sortingType
      )
        .then((resp) => setQueryResults(resp))
        .catch((err) => {
          throw err;
        });
    }
  };

  return (
    <div className="flight-results-wrapper">
      <div className="flight-results-header">
        <span>Sıralama Kriteri</span>
        <Button
          content="Ekonomi Ücreti"
          classes={sortType === "economy" && "clicked"}
          onClickAction={() => sortFlights("economy")}
        />
        <Button
          content="Kalkış Saati"
          classes={sortType === "time" && "clicked"}
          onClickAction={() => sortFlights("time")}
        />
      </div>
      <div className="flight-results-content">
        {queryResults.length === 0 && <LoadingSpinner />}
        {queryResults.map((el, i) => (
          <FlightResult key={i} flightInfo={el} />
        ))}
      </div>
    </div>
  );
}

export default FlightResults;
