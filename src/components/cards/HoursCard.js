import React, { useState } from 'react';
import './HoursCard.css';
import InputRange from 'react-input-range';
import '../../slider.css';
import { ReactComponent as Chart } from '../images/chart.svg';

const HoursCard = () => {
  const [state, setState] = useState({
    value: { min: 6, max: 13 },
  });

  return (
    <div className="hourdCardContainer">
      <div className="chart">
        <Chart />
      </div>
      <div className="slider">
        <InputRange
          maxValue={23}
          minValue={0}
          value={state.value}
          onChange={(value) => setState({ value })}
        />
      </div>
    </div>
  );
};

export default HoursCard;
