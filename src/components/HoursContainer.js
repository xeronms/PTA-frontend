import React from 'react';
import './HoursContainer.css';

const HoursContainer = () => {
  return (
    <div class="hoursContainer">
      Godziny
      <div class="slider">
        <input type="range" class="slider"></input>
      </div>
    </div>
  );
};

export default HoursContainer;
