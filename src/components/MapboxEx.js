import { useState } from 'react';
import { StaticMap, MapContext, NavigationControl } from 'react-map-gl';
import DeckGL, { GeoJsonLayer, LineLayer } from 'deck.gl';
import busDataPolygons from '../geodata/testBusStopsDataPolygons.json';
import testRoutes from '../geodata/testRoutes.json';

const INITIAL_VIEW_STATE = {
    latitude: 50.0928,
    longitude: 18.5444,
    zoom: 12.08,
    bearing: 0,
    pitch: 15,
};

const MAP_STYLE = 'mapbox://styles/mapbox/light-v10';
const NAV_CONTROL_STYLE = {
    position: 'absolute',
    top: 10,
    right: 10,
};

const MapboxEx = () => {

    
    const onClick = (info) => {
        if (info.object) {
            // eslint-disable-next-line
            alert(`${info.object.properties.name}`);
        }
    };

    const layers = [
        new GeoJsonLayer({
            id: 'busstops',
            // data: busStops,
            data: busDataPolygons,
            // Styles
            filled: true,
            pointRadiusMinPixels: 2,
            pointRadiusScale: 5,
            getPointRadius: 5,
            getFillColor: [200, 0, 80, 180],
            // Interactive props
            pickable: true,
            extruded: true,
            autoHighlight: true,
            getElevation: 500,

            strokeWeight: 30,
            stroked: false,
            opacity: 0.8,
            wireframe: true,
            // onHover: (info) => setHoverInfo(info),
            onClick,
        }),
        new LineLayer({
            id: 'line-layer',
            data: testRoutes,
            pickable: true,
            getWidth: 20,
            getSourcePosition: (d) => d.from.coordinates,
            getTargetPosition: (d) => d.to.coordinates,
            getColor: (d) => [Math.sqrt(d.inbound + d.outbound), 140, 0],
        }),
    ];

    return (
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={layers}
            ContextProvider={MapContext.Provider}
            getTooltip={({ object }) => object && `${object.properties.data}`}
        >
            <StaticMap
                mapStyle={MAP_STYLE}
                mapboxApiAccessToken={
                    'pk.eyJ1IjoibW5leXVnbiIsImEiOiJja3dyd3cyM3gxMHR2MnVsY2VoOGFjajlmIn0.a1LvZT2UpfZ0mysl3dkbkg'
                }
            />
            <NavigationControl style={NAV_CONTROL_STYLE} />
        </DeckGL>
    );
};

export default MapboxEx;
