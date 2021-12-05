import { createContext, useState } from 'react';

export const MapContext1 = createContext();

export const MapProvider = (props) => {
    const [map, setMap] = useState();
    return (
        <MapContext1.Provider value={{ map, setMap }}>
            {props.children}
        </MapContext1.Provider>
    );
};
