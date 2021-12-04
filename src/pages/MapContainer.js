import { Row, Col, Card, Container } from 'react-bootstrap';
import MapboxEx from '../components/MapboxEx';

const MapContainer = () => {
    return (
        <>
            <div className='d-flex h-100 pt-2'>
                <div style={{ width: '200px' }}></div>
                <div className='flex-grow-1'>
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
