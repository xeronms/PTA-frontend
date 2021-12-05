import React from 'react';
import { Card } from 'react-bootstrap';
import MapboxEx from '../components/MapboxEx';
import './MapContainer.css';
import LeftMenu from '../components/LeftMenu';
import Cards from '../components/cards/Cards';
import RightMenu from '../components/RightMenu';

const MapContainer = () => {
    return (
        <>
            <Card className='mapContainer'>
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
