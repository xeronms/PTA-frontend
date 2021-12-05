import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import MapboxEx from '../components/MapboxEx';
import makeAnimated from 'react-select/animated';
import './MapContainer.css';
import LeftMenu from '../components/LeftMenu';
import Cards from '../components/cards/Cards';
import RightMenu from '../components/RightMenu';

const animatedComponents = makeAnimated();

const MapContainer = () => {
  const [from, setFrom] = React.useState([]);

  const handleChange = (selectedOption) => {
    setFrom((state) => [...state, selectedOption]);
  };
  return (
    <>
      <Card className="mapContainer">
        <Card.Body>
          <MapboxEx></MapboxEx>
        </Card.Body>
      </Card>
      <LeftMenu />
      <RightMenu />
      <Cards />
    </>
  );
};

export default MapContainer;
