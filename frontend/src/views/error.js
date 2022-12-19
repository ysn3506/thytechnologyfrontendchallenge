import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '../components/button'


function ErrorView() {
  const navigate = useNavigate();
  return (
    <div className="error-wrapper">
      <h1>Bir şeyler ters gitti. Lütfen tekrar deneyin.</h1>
      <Button
        classes="search-input-button navigate"
        content="Yeniden Dene"
        onClickAction={() => navigate("/")}
      />
    </div>
  );
}

export default ErrorView;
