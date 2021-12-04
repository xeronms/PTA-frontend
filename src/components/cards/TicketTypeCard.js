import React from 'react';
import './TicketTypeCard.css';
import { ReactComponent as Types } from '../images/types.svg';

const TicketTypeCard = () => {
  return (
    <div className="ticketTypeContainer">
      <div className="svgTypes">
        <Types />
      </div>
    </div>
  );
};

export default TicketTypeCard;
