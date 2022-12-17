import React, { useEffect } from 'react';
import { setDarkMode } from '../storage/actions';

const FlightSelection = () => {
     useEffect(() => {
       setDarkMode(false);
     }, []);
    return (
        <div>
            <h1>Flight Selection</h1>
        </div>
    );
};

export default FlightSelection;