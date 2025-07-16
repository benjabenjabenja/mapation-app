import { createContext } from 'react';

export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [number, number];
    fetchPlaces: (query: string) => Promise<any>;
}

const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);

export default PlacesContext;