import { useState, useEffect, useContext } from 'react';
import { StaticMap, MapContext, NavigationControl } from 'react-map-gl';
import DeckGL, { GeoJsonLayer, LineLayer } from 'deck.gl';
import busDataPolygons from '../geodata/testBusStopsDataPolygons.json';
import testRoutes from '../geodata/testRoutes.json';
import { MapContext1 } from '../contexts/MapContext1';
import { BASEMAP } from '@deck.gl/carto';

const INITIAL_VIEW_STATE = {
    latitude: 50.0928,
    longitude: 18.5444,
    zoom: 12.08,
    bearing: 0,
    pitch: 15,
};

// const MAP_STYLE = 'mapbox://styles/mapbox/light-v10';
const MAP_STYLE =
    'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';
const NAV_CONTROL_STYLE = {
    position: 'absolute',
    top: 10,
    right: 10,
};

const MapboxEx = () => {
    const { map, setMap } = useContext(MapContext1);
    const [mapData, setMapData] = useState();

    useEffect(() => {
        // onClickHandler();
        renderStations();
        console.log('map: ', map);
    }, [map]);

    const renderStations = () => {
        if (!map) return;

        let busStationsData = [];

        const selectedStationsIds = Object.keys(map).map((item) =>
            parseInt(item)
        );

        let tmp = [];
        busDataPolygons.features.forEach((stationData) => {
            const currentStationId = parseInt(stationData.id);
            tmp.push(currentStationId);
        });

        console.log(tmp);

        busDataPolygons.features.forEach((stationData) => {
            const currentStationId = parseInt(stationData.id);
            if (selectedStationsIds.includes(currentStationId)) {
                stationData.properties['count'] = map[`${stationData.id}.0`];
                busStationsData.push(stationData);
            }
        });

        const geoJsonToRender = {
            type: 'FeatureCollection',
            features: busStationsData,
        };
        setMapData(geoJsonToRender);
    };

    const onClick = (info) => {
        if (info.object) {
            // eslint-disable-next-line
            alert(`${info.object.properties.name}`);
        }
    };

    const layers = [
        new GeoJsonLayer({
            id: 'busstops',
            data: mapData,
            // Styles
            filled: true,
            pointRadiusMinPixels: 2,
            pointRadiusScale: 5,
            getPointRadius: 5,
            getFillColor: (info) => [
                info.properties.count * 10,
                100 - info.properties.count > 0
                    ? 100 - info.properties.count
                    : 0,
                80,
                180,
            ],
            // Interactive props
            pickable: true,
            extruded: true,
            autoHighlight: true,
            getElevation: (info) => info.properties.count * 2,

            strokeWeight: 30,
            stroked: false,
            opacity: 0.8,
            wireframe: true,
            // onHover: (info) => setHoverInfo(info),
            onClick,
        }),
        // new LineLayer({
        //     id: 'line-layer',
        //     data: testRoutes,
        //     pickable: true,
        //     getWidth: 20,
        //     getSourcePosition: (d) => d.from.coordinates,
        //     getTargetPosition: (d) => d.to.coordinates,
        //     getColor: (d) => [Math.sqrt(d.inbound + d.outbound), 140, 0],
        // }),
    ];

    return (
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={layers}
            ContextProvider={MapContext.Provider}
            getTooltip={({ object }) =>
                object &&
                (!Number.isInteger(object.properties.data)
                    ? `${object.properties.data}  ${object.properties.count} wyjazdów`
                    : `${object.properties.data}`)
            }
        >
            <StaticMap
                mapStyle={MAP_STYLE}
                mapboxApiAccessToken={
                    'pk.eyJ1IjoibW5leXVnbiIsImEiOiJja3dwNmZqMzgwOXEzMm9wMzNtcXg4b2hkIn0.UvTBr-hLirOkwGXLbPwqgQ'
                }
            />
            <NavigationControl style={NAV_CONTROL_STYLE} />
        </DeckGL>
    );
};

export default MapboxEx;
