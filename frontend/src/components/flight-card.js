import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import { capitalizeFirstLetter } from '../utils';

function FlightCard({ flightCategory }) {
    const {brandCode, price, rights } = flightCategory;
    return (
      <div className="card-wrapper">
        <div className="card-title">
          <span className="title">{capitalizeFirstLetter(brandCode)}</span>
          <span className="price">
            <span className='currency'>{price.currency}</span>
            <span>{price.amount}</span>
          </span>
        </div>
        <div className="card-content">
          {rights &&
            rights.map((r,i) => (
              <div className="right" key={i}>
                <span>{r}</span>
              </div>
            ))}
        </div>
        <Button content="Uçuşu Seç" />
      </div>
    );
}

FlightCard.propTypes = {
  flightCategory: PropTypes.object,
};

export default FlightCard;