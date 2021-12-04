// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import { Container } from 'react-bootstrap';
import MapContainer from './pages/MapContainer';
import Home from './pages/Home';
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
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/map' element={<MapContainer />} />
                    </Routes>
                </Container>
                <Backend></Backend>
            </div>
        </Router>
    );
}

export default App;
