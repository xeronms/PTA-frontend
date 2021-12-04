import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import MapboxEx from '../components/MapboxEx';
import { options } from '../data.js';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './MapContainer.css';
import DateSelector from '../components/DateSelector.js';

const animatedComponents = makeAnimated();

const MapContainer = () => {
  const [from, setFrom] = React.useState([]);

  const handleChange = (selectedOption) => {
    setFrom((state) => [...state, selectedOption]);
  };
  return (
    <>
      <div className="d-flex h-100 pt-2">
        <div style={{ width: '50px' }}></div>
        <div className="dateAndHour">Date and hour</div>
        <div style={{ width: '150px' }}></div>
        <div className="flex-grow-1">
          <div className="destinationSelect">
            <div className="label">Wybierz przystanek końcowy</div>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={from}
              isMulti
              options={options}
              onChange={handleChange}
              options={options}
            />
          </div>
          <Card style={{ height: '95%' }}>
            <Card.Body>
              <MapboxEx></MapboxEx>
            </Card.Body>
          </Card>
        </div>
        <div style={{ width: '150px' }}></div>
      </div>
    </>
  );
};

export default MapContainer;
