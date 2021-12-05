import React from 'react';
import './RightMenu.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { options } from '../helpers/data.js';

const animatedComponents = makeAnimated();

const RightMenu = () => {
  const [from, setFrom] = React.useState([]);
  const [to, setTo] = React.useState([]);

  const handleFrom = (selectedOption) => {
    setFrom((state) => [...state, selectedOption]);
  };

  const handleTo = (selectedOption) => {
    setTo((state) => [...state, selectedOption]);
  };

  return (
    <div className="rightMenu-visible">
      <div className="selectboxContainer">
        <div className="selectbox">
          <div className="label">Przystanek początkowy</div>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={from}
            isMulti
            options={options}
            onChange={handleFrom}
            options={options}
            maxMenuHeight={150}
          />
        </div>
        <div className="selectSpacer"></div>
        <div className="selectbox">
          <div className="label">Przystanek końcowy</div>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={from}
            isMulti
            options={options}
            onChange={handleTo}
            options={options}
            maxMenuHeight={150}
          />
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
