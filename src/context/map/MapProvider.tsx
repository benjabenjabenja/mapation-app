import React, { useReducer } from 'react'
//Context:
import { MapContext } from './MapContext';
//Reducer:
import { mapReducer } from './reducer/MapReducer';
//Actions:
import { SET_MAP } from './reducer/actionsTypes';

export interface MapState {
    isMapReady: boolean;
    map?: mapboxgl.Map;
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
}

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
    const [stateMap, dispatch] = useReducer(mapReducer, INITIAL_STATE);

    const setMap = (map: mapboxgl.Map) => {
        dispatch({ type: SET_MAP, payload: map });
    }

    return (
        <MapContext.Provider value={{
            ...stateMap,
            setMap
        }}>
            {children}
        </MapContext.Provider>
    );
}

export default MapProvider