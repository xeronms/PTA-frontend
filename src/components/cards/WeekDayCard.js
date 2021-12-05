import React from 'react';
import './WeekDayCard.css';
import { ReactComponent as Days } from '../images/dayCharts.svg';

const WeekDayCard = () => {
  return (
    <div className="weekDayCardContainer">
      <div className="chartsContainer1">
        <Days />
      </div>
    </div>
  );
};

export default WeekDayCard;
