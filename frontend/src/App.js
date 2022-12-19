import React from "react";
import Header from "./components/header";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FlightSearch from "./views/flight-search";
import FlightSelection from "./views/flight-selection";
import FlightSelectionResult from "./views/flight-selection-result";
import ErrorView from "./views/error";
import ErrorBoundary from "./components/error-boundary";
import { useSelector } from "react-redux";

function App() {
  const { queryFlightFrom, queryFlightTo, selectedFlight } = useSelector(
    (state) => state.reducer
  );
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FlightSearch />} />
          <Route path="/flightSearch" element={<Navigate to="/" />} />
          <Route
            path="/flight-selection"
            element={
              queryFlightFrom.length > 0 && queryFlightTo ? (
                <ErrorBoundary>
                  <FlightSelection />
                </ErrorBoundary>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/flight-selection-result"
            element={
              selectedFlight.originAirport ? <FlightSelectionResult /> : <Navigate to="/" />
            }
          />
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
