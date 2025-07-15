import { createContext } from 'react';

export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [number, number];
}

const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);

export default PlacesContext;