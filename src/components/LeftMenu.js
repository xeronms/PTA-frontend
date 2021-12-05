import React, { useState } from 'react';
import './LeftMenu.css';
import { ReactComponent as Stats } from '../components/images/statistics.svg';

const LeftMenu = () => {
  return (
    <div className="leftMenu">
      <div className="statsContainer">
        <Stats />
      </div>
    </div>
  );
};

export default LeftMenu;
