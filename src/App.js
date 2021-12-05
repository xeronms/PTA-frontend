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
import Contact from './pages/Contact';
import Backend from './helpers/Backend';

function App() {

  return (
    <HashRouter>
      <div className='overflow-hidden'>
        <Container
          className='px-0'
          style={{ height: '95vh', minWidth: '100%', width: '100%' }}
        >
          <NavbarComponent></NavbarComponent>
          <Routes>
            <Route path='/' element={<MapContainer />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/backend' element={<Backend />} />
          </Routes>
        </Container>
      </div>
    </HashRouter>
  );
}

export default App;
