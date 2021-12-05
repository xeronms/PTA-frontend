import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [data, setData] = useState({ from: [...Array(400).keys()] });
    return (
        <DataContext.Provider value={{ data, setData }}>
            {props.children}
        </DataContext.Provider>
    );
};
