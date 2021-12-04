import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { options } from '../data.js';

const animatedComponents = makeAnimated();

const Home = () => {
  const [from, setFrom] = React.useState([]);

  const handleChange = (selectedOption) => {
    setFrom((state) => [...state, selectedOption]);
  };

  const navigate = useNavigate();

  const routeChange = () => {
    navigate('/map');
  };

  return (
    <div className="homeContainer">
      <div className="selectbox">
        <div className="label">Przystanek początkowy</div>
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
      <button class="nextButton" onClick={routeChange}>
        Dalej
      </button>
    </div>
  );
};

export default Home;
