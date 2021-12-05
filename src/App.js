// import './App.css';
import {
    BrowserRouter as Router,
    Route,
    HashRouter,
    Routes,
} from 'react-router-dom';
import { DataProvider } from './contexts/DataContext';
import NavbarComponent from './components/NavbarComponent';
import { Container } from 'react-bootstrap';
import MapContainer from './pages/MapContainer';
import Contact from './pages/Contact';
import Backend from './helpers/Backend';
import Analiza from './components/Analiza';
import { MapProvider } from './contexts/MapContext1';

function App() {
    return (
        <HashRouter>
            <div className='overflow-hidden'>
                <DataProvider>
                    <MapProvider>
                        <Container
                            className='px-0'
                            style={{
                                height: '95vh',
                                minWidth: '100%',
                                width: '100%',
                            }}
                        >
                            <NavbarComponent></NavbarComponent>
                            <Routes>
                                <Route path='/' element={<MapContainer />} />
                                <Route path='/contact' element={<Contact />} />
                                <Route path='/analiza' element={<Analiza />} />
                                <Route path='/backend' element={<Backend />} />
                            </Routes>
                            <Backend></Backend>
                        </Container>
                    </MapProvider>
                </DataProvider>
            </div>
        </HashRouter>
    );
}

export default App;
