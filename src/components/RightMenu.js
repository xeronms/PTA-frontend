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
    setFrom(selectedOption.map((x) => x.value));
  };

  const handleTo = (selectedOption) => {
    setTo(selectedOption.map((x) => x.value));
  };

  const handleSubmit = () => {
    console.log(from);
    // from.forEach((array) => array.forEach((item) => console.log(item.value)));
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
            maxMenuHeight={150}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default RightMenu;
