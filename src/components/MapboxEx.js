import { StaticMap, MapContext, NavigationControl } from 'react-map-gl';
import DeckGL, { GeoJsonLayer, ArcLayer, HexagonLayer } from 'deck.gl';
import busStops from '../geodata/bus_stops.geojson';
import testData from '../geodata/testData.json';
import testData2 from '../geodata/testData2.json';
import testData3 from '../geodata/testData3.json';
import busDataPolygons from '../geodata/testBusStopsDataPolygons.json';

// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const AIR_PORTS =
    'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

const INITIAL_VIEW_STATE = {
    latitude: 50.0928,
    longitude: 18.5444,
    zoom: 13.08,
    bearing: 0,
    pitch: 30,
};

const MAP_STYLE = 'mapbox://styles/mapbox/dark-v10';
const NAV_CONTROL_STYLE = {
    position: 'absolute',
    top: 10,
    left: 10,
};

const MapboxEx = () => {
    const onClick = (info) => {
        if (info.object) {
            // eslint-disable-next-line
            alert(
                `${info.object.properties.name} (${info.object.properties.abbrev})`
            );
        }
    };

    const layers = [
        new GeoJsonLayer({
            id: 'busstops',
            // data: busStops,
            // data: testData2,
            // data: testData3,
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
            getElevation: 500,
            autoHighlight: true,

            strokeWeight: 30,
            stroked: false,
            opacity: 0.8,
            wireframe: true,
            onClick,
        }),
        new HexagonLayer({
            id: 'hexagon-layer',
            // data: busStops,
            data: testData2,
            pickable: true,
            extruded: true,
            radius: 200,
            elevationScale: 4,

            getPosition: (d) => d.geometry.coordinates,
        }),
    ];

    return (
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={layers}
            ContextProvider={MapContext.Provider}
            getTooltip={({ object }) => object && `${object.properties.name}`}
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
