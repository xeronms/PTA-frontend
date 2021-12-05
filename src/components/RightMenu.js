import React, { useContext } from 'react';
import './RightMenu.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { options } from '../helpers/data.js';
import { DataContext } from '../contexts/DataContext';
import { MapContext1 } from '../contexts/MapContext1';

const animatedComponents = makeAnimated();

const RightMenu = () => {
  const { map, setMap } = useContext(MapContext1);

  const { data, setData } = useContext(DataContext);

  // const [from, setFrom] = React.useState([]);
  const [to, setTo] = React.useState([]);

  const handleFrom = (selectedOption) => {
    setData({ from: selectedOption.map((x) => x.value) });
  };

  const handleTo = (selectedOption) => {
    setTo((state) => [...state, selectedOption]);
  };

  const handleSubmit = () => {
    console.log('data', data);
    console.log('map', map);
  };

  return (
    <div className="rightMenu-visible">
      <div className="selectboxContainer">
        <div className="selectbox">
          <div className="label">Przystanek początkowy</div>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={data.from}
            isMulti
            options={options}
            onChange={handleFrom}
            maxMenuHeight={150}
          />
        </div>
        <div className="selectSpacer"></div>
        <div className="selectbox">
          <div className="label">Przystanek końcowy</div>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={data.from}
            isMulti
            options={options}
            onChange={handleTo}
            maxMenuHeight={150}
          />
        </div>
        <button onClick={handleSubmit}>Click</button>
      </div>
    </div>
  );
};

export default RightMenu;
