// import './App.css';
import {
    BrowserRouter as Router,
    Route,
    HashRouter,
    Routes,
} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import { Container } from 'react-bootstrap';
import MapContainer from './pages/MapContainer';
import Home from './pages/Home';
import * as dfd from 'danfojs/dist/index';
import Contact from './pages/Contact';

function App() {
    function load_csv() {
        // const dfd = require('danfojs-node')
        dfd.read_csv('Dane_Ostateczne_1.csv')
            .then(async (df) => {
                df['Przystanek_Początkowy'].head().print();
            })
            .catch((err) => {
                console.log(err);
            });
    }
    load_csv();

    return (
        <HashRouter>
            <div className='overflow-hidden'>
                <Container
                    className='px-0'
                    style={{ height: '95vh', minWidth: '100%', width: '100%' }}
                >
                    <NavbarComponent></NavbarComponent>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/map' element={<MapContainer />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </Container>
            </div>
        </HashRouter>
    );
}

export default App;
