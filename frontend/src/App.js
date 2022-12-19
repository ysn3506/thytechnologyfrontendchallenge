import React from "react";
import Header from "./components/header";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import FlightSearch from "./views/flight-search";
import FlightSelection from "./views/flight-selection";
import FlightSelectionResult from "./views/flight-selection-result";
import ErrorView from "./views/error";
import ErrorBoundary from "./components/error-boundary";

function App() {
  const path = window.location;
  return (
    <div className="App">
      <Header />
      <SwitchTransition mode="out-in">
        <CSSTransition key={path} classNames="fade" timeout={250}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<FlightSearch />} />
              <Route path="/flightSearch" element={<Navigate to="/" />} />
              <Route
                path="/flight-selection"
                element={
                  <ErrorBoundary>
                    <FlightSelection />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/flight-selection-result"
                element={<FlightSelectionResult />}
              />
              <Route path="*" element={<ErrorView />} />
            </Routes>
          </BrowserRouter>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
