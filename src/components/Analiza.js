import React from 'react';
import './Analiza.css';
import AnalizaNav from './AnalizaNav';
import AnalizaNumbers from './AnalizaNumbers';
import AnalizaData from './AnalizaData';

const Analiza = () => {
  return (
    <div className="anContainer">
      <AnalizaNav />
      <AnalizaNumbers />
      <AnalizaData />
    </div>
  );
};

export default Analiza;
