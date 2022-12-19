import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import pass from "../assets/check.png";
import fail from "../assets/close.png";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import ResultSummary from "../components/result-summary";

const FlightSelectionResult = () => {
  const { selectedFlight } = useSelector((state) => state.reducer);
  const { status, price, numberOfPassengers } = selectedFlight;
  const totalPrice = price?.amount * numberOfPassengers;
  const navigate = useNavigate();

  const explanation =
    status === "AVAILABLE"
      ? "Kabin Seçiminiz Tamamlandı."
      : "Kabin Seçiminiz Tamamlanamadı.";

  return (
    <div className="selection-result-layout">
      <div className="selection-result-wrapper">
        <div className="selection-result-status">
          <div className="status">
            <img src={status === "AVAILABLE" ? pass : fail} alt="status" />
            <span>{explanation}</span>
          </div>
          <div className="line" />
          {status === "AVAILABLE" ? (
            <div className="amount">
              <span className="total">Toplam Tutar</span>
              <span className="fare">
                {price.currency} {totalPrice}
              </span>
            </div>
          ) : (
            <Button
              content={"Başa Dön"}
              classes="search-input-button navigate"
              onClickAction={() => navigate("/")}
            />
          )}
        </div>
        {status === "AVAILABLE" && (
          <ResultSummary summary={{ ...selectedFlight }} />
        )}
      </div>
    </div>
  );
};

FlightSelectionResult.propTypes = {
  flightInfo: PropTypes.object,
};

export default FlightSelectionResult;
