import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  setDarkMode,
  setPromotionToggle,
  setQueryResults,
} from "../storage/actions";
import FlightQuerySummary from "../components/flight-query-summary";
import SwitchToggle from "../components/switch-toggle";
import FlightResults from "../components/flight-results";
import ToggleInfo from "../components/toggle-info";
import { capitalizeFirstLetter } from "../utils";
import { getFlights } from "../services/apis";
import ErrorBoundary from "../components/error-boundary";

const FlightSelection = () => {
  const {
    queryFlightFrom,
    queryFlightTo,
    queryFlightPassengerAmount,
    isPromotionActive,
    sortType,
  } = useSelector((state) => state.reducer);

  useEffect(() => {
    setDarkMode(false);
  }, []);

  const getPromotionDiscountToFlights = () => {
    if (!isPromotionActive) {
      getFlights(
        capitalizeFirstLetter(queryFlightFrom),
        capitalizeFirstLetter(queryFlightTo),
        sortType
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
        sortType
      )
        .then((resp) => setQueryResults(resp))
        .catch((err) => {
          throw err;
        });
    }
  };

  const togglePromotion = () => {
    setPromotionToggle(!isPromotionActive);
    getPromotionDiscountToFlights(sortType);
  };

  const toggleContent = (
    <>
      <p>
        Promosyon Kodu Seçeneği ile tüm Economy kabini EcoFly paketlerini %50
        indirimle satın alabilirsiniz!
      </p>
      <p>
        Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim
        yapılamamaktadır.
      </p>
    </>
  );

  return (
    <div className="flight-selection-view">
      <div className="flight-selection-wrapper">
        <FlightQuerySummary
          from={queryFlightFrom}
          to={queryFlightTo}
          passengerAmount={queryFlightPassengerAmount}
        />
        <SwitchToggle label="Promosyon Kodu" toggleMethod={togglePromotion} />
        <ToggleInfo>{toggleContent}</ToggleInfo>
        <ErrorBoundary>
          <FlightResults discountedFlights={getPromotionDiscountToFlights} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default FlightSelection;
