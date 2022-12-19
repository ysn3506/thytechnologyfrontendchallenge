/* eslint-disable */
import React, { Component } from "react";
import Button from "./button";


class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.info(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className="error-wrapper">
          <h2 className="error-boundary">
            Yüklenirken bir hata ile karşılaşıldı.
          </h2>
          <h2 className="error-boundary">Lütfen tekrar deneyin.</h2>
          <Button
            classes="search-input-button navigate"
            content="Geri Dön"
            onClickAction={() => navigate(-1)}
          />
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
