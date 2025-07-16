import React, { useEffect, useReducer } from 'react';
//Context:
import PlacesContext from './PlacesContext';
//Reducer:
import { placesReducer } from './reducer/PlacesReducer';
import { SET_USER_LOCATION } from './reducer/actionsTypes';
//Helpers:
import { ERRORS, getUserLocation, MENSAJE_ERROR_GEOLOCATION } from '../../helpers';
import { searchApi } from '../../apis';

interface PlacesProviderProps {
    children: React.ReactNode;
}

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
}

const PlacesProviders = ({ children }: PlacesProviderProps) => {
    const [placesState, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    useEffect(() => {
        getUserLocation()
            .then(([lng, lat]) => {
                dispatch({
                    type: SET_USER_LOCATION,
                    payload: [lng, lat]
                });
            })
            .catch(err => {
                alert(MENSAJE_ERROR_GEOLOCATION);
                console.error({err});
            });
    }, []);

    const fetchPlaces = async (query: string): Promise<any> => {
        if (query.length === 0) return [];

        if(!placesState.userLocation) throw new Error(ERRORS.NO_USER_LOCATION);

        try {
            const response = await searchApi(`/${query}.json`, {
                params: {
                    proximity: placesState.userLocation.join(',')
                }
            });

            console.log({ response });
            
        } catch (error) {
            console.error({error});
        }
    }

    return (
        <PlacesContext.Provider value={{
            ...placesState,
            fetchPlaces
        }}>
            {children}
        </PlacesContext.Provider>
    );
}

export default PlacesProviders;