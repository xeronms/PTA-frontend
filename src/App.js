import React from 'react';
import Map from './components/Map';
import Navbar from './components/Navbar';
import HoursContainer from './components/HoursContainer';
import FiltersContainer from './components/FiltersContainer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HoursContainer></HoursContainer>
      <Map></Map>
      <FiltersContainer></FiltersContainer>
    </div>
  );
};

export default App;
