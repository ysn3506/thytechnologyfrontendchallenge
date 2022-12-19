/* eslint-disable */
import React, { Component } from "react";


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
        <>
          {" "}
          <h1 className="error-boundary">
            Yüklenirken bir hata ile karşılaşıldı.
          </h1>
          <h1 className="error-boundary">Lütfen Tekrar Deneyin</h1>
        </>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
