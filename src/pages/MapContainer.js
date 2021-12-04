import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import MapboxEx from '../components/MapboxEx';
import './MapContainer.css';
import { options } from '../data.js';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const MapContainer = () => {
  const [from, setFrom] = React.useState([]);

  const handleChange = (selectedOption) => {
    setFrom((state) => [...state, selectedOption]);
  };
  return (
    <>
      <div className="d-flex h-100 pt-2">
        <div style={{ width: '200px' }}></div>
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
        <div style={{ width: '200px' }}></div>
      </div>
    </>
  );
};

export default MapContainer;
