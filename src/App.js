import './App.css';
import MapboxEx from './components/MapboxEx';
import NavbarComponent from './components/Navbar';
import { Col, Row } from 'react-bootstrap';

function App() {
    return (
        <div className='App'>
            <NavbarComponent></NavbarComponent>
            <Row>
                <Col md={3}>asdfzsdf</Col>
                <Col md={9}>
                    <MapboxEx></MapboxEx>
                </Col>
            </Row>
        </div>
    );
}

export default App;
