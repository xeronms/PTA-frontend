import { StaticMap, MapContext, NavigationControl } from 'react-map-gl';
import DeckGL, { GeoJsonLayer, ArcLayer, HexagonLayer } from 'deck.gl';
import busStops from '../geodata/bus_stops.geojson';
import testData from '../geodata/testData.json';

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
            data: busStops,
            // data: testData,
            // Styles
            filled: true,
            pointRadiusMinPixels: 2,
            pointRadiusScale: 5,
            getPointRadius: 5,
            getFillColor: [200, 0, 80, 180],
            // Interactive props
            pickable: true,
            extruded: true,
            getElevation: 3000,
            autoHighlight: true,

            stroked: false,
            opacity: 0.8,
            wireframe: true,
            onClick,
        }),
        new HexagonLayer({
            id: 'hexagon-layer',
            // data: busStops,
            data: testData,
            pickable: true,
            extruded: true,
            radius: 200,
            elevationScale: 4,
            getPosition: (d) => d.COORDINATES,
        }),
        // new ArcLayer({
        //     id: 'arcs',
        //     data: AIR_PORTS,
        //     // dataTransform: (d) =>
        //     //     d.features.filter((f) => f.properties.scalerank < 4),
        //     // // Styles
        //     // getSourcePosition: (f) => [-0.4531566, 51.4709959], // London
        //     // getTargetPosition: (f) => f.geometry.coordinates,
        //     getSourceColor: [0, 128, 200],
        //     getTargetColor: [200, 0, 80],
        //     getWidth: 1,
        // }),
    ];

    return (
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={layers}
            ContextProvider={MapContext.Provider}
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