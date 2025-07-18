import { createContext } from 'react';
//Entitys:
import { Feature } from '../../entitys';

export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [number, number];
    fetchPlaces: (query: string) => Promise<Feature[]>;
    places: Feature[];
    isLoadingPlaces: boolean;
}

const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);

export default PlacesContext;