import React from 'react';
import './AnalizaData.css';

import { ReactComponent as TicketTypes } from './images/ticketTypes.svg';
import { ReactComponent as TrafficVolume } from './images/trafficVolume.svg';

import { ReactComponent as TicketCategoriesChart } from './images/ticketCategoriesChart.svg';
import { ReactComponent as FlowChart } from './images/flowChart.svg';


const AnalizaData = () => {
  return <div className="dataContainer">

    <div className="sideBarContainer">
      <div className="sideBarTopContainer">
        <TicketTypes />
      </div>
      <div className="sideBarBottomContainer">
        <TrafficVolume />
      </div>
    </div>

    <div className="dataVisualizationContainer">
      <div className="ticketPercentageGraphsContainer">

      </div>
      <div className="ticketCategoriesChartContainer">
        <TicketCategoriesChart />
      </div>
      <div className="flowChartContainer">
        <FlowChart />
      </div>
    </div>

  </div>;
};

export default AnalizaData;
