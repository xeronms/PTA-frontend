import React from 'react';
import './AnalizaNav.css';
import { months } from '../helpers/months.js';
import { days } from '../helpers/days.js';
import { years } from '../helpers/years.js';

const AnalizaNav = () => {
  return (
    <div class="navContainer">
      <div className="selectBox">
        <label>Miesiąc</label>
        <select>
          {months.map((month) => (
            <option value={month.id}>{month.name}</option>
          ))}
        </select>
      </div>
      <div className="selectBox">
        <label>Dzień</label>
        <select>
          {days.map((day) => (
            <option value={day}>{day}</option>
          ))}
        </select>
      </div>
      <div className="selectBox">
        <label>Rok</label>
        <select value={2021}>
          {years.map((year) => (
            <option value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="selectBox2">
        <label>Przystanek początkowy</label>
        <select value={'asd'}>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select>
      </div>
      <div className="selectBox2">
        <label>Przystanek końcowy</label>
        <select value={'asd'}>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select>
      </div>
    </div>
  );
};

export default AnalizaNav;
