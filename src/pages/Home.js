import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './Home.css';

const options = [
  {
    label: 'Group 1',
    options: [
      { value: 'p1', label: 'Przystanek1' },
      { value: 'p2', label: 'Przystanek2' },
      { value: 'p3', label: 'Przystanek3' },
    ],
  },

  {
    label: 'Group 2',
    options: [
      { value: 'p4', label: 'Przystanek4' },
      { value: 'p5', label: 'Przystanek5' },
      { value: 'p6', label: 'Przystanek6' },
    ],
  },
  {
    label: 'Group 3',
    options: [
      { value: 'p7', label: 'Przystanek7' },
      { value: 'p8', label: 'Przystanek8' },
    ],
  },
];

const animatedComponents = makeAnimated();

const Home = () => {
  const [from, setFrom] = React.useState([options[0], options[1]]);

  const handleChange = (selectedOption) => {
    setFrom((state) => [...state, selectedOption]);
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
      <button class="nextButton">Dalej</button>
    </div>
  );
};

export default Home;
