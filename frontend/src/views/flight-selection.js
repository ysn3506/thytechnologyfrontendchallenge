import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { setDarkMode, setPromotionToggle, setQueryResults } from "../storage/actions";
import FlightQuerySummary from "../components/flight-query-summary";
import SwitchToggle from "../components/switch-toggle";
import FlightResults from "../components/flight-results";
import ToggleInfo from "../components/toggle-info";
import { getFlights } from "../services/apis";
import { capitalizeFirstLetter } from "../utils";

const FlightSelection = () => {
  const {
    queryFlightFrom,
    queryFlightTo,
    queryFlightPassengerAmount,
    isPromotionActive
  } = useSelector((state) => state.reducer);

  useEffect(() => {
    setDarkMode(false);
  }, []);

  const togglePromotion = () => {
    setPromotionToggle(!isPromotionActive);
    if (!isPromotionActive) {
      getFlights(
        capitalizeFirstLetter(queryFlightFrom),
        capitalizeFirstLetter(queryFlightTo)
      ).then((resp) => {
        console.log(resp);
        resp.forEach((element) => {
          const ecoFly = element.fareCategories.ECONOMY.subcategories.find(
            (cat) => cat.brandCode === "ecoFly"
          );
          ecoFly.price.amount = Math.floor(ecoFly.price.amount / 2);
        });

        setQueryResults(resp);
      });
    } else {
      getFlights(
        capitalizeFirstLetter(queryFlightFrom),
        capitalizeFirstLetter(queryFlightTo)
      ).then((resp) => setQueryResults(resp));
    }
  } 




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
        <FlightResults />
      </div>
    </div>
  );
};

export default FlightSelection;
