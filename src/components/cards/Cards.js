import React from 'react';
import './Cards.css';
import HoursCard from './HoursCard';
import TicketTypeCard from './TicketTypeCard';
import WeekDayCard from './WeekDayCard';

const Cards = () => {
  return (
    <div className="cardsContainer">
      <HoursCard />
      <TicketTypeCard />
      <WeekDayCard />
    </div>
  );
};

export default Cards;
