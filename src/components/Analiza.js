import React from 'react';
import './Analiza.css';
import AnalizaNav from './AnalizaNav';
import AnalizaData from './AnalizaData';

const Analiza = () => {
  return (
    <div className="anContainer">
      <AnalizaNav />
      <AnalizaData />
    </div>
  );
};

export default Analiza;
