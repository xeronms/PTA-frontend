// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import { Container } from 'react-bootstrap';
import MapContainer from './pages/MapContainer';
import Home from './pages/MapContainer';
import Backend from './helpers/Backend';

function App() {
    return (
        <Router>
            <div className='overflow-hidden'>
                <Container
                    className='px-0'
                    style={{ height: '95vh', minWidth: '100%', width: '100%' }}
                >
                    <NavbarComponent></NavbarComponent>
                    <Backend></Backend>
                </Container>
            </div>
        </Router>
    );
}

export default App;
