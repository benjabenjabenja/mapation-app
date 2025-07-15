import { createContext } from 'react';

export interface MapContextProps {
    isMapReady: boolean;
    map?: mapboxgl.Map;
    setMap: (map: mapboxgl.Map) => void;
}

export const MapContext = createContext({} as MapContextProps);

export default MapContext;