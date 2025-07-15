import React, { useEffect, useReducer } from 'react';
//Context:
import PlacesContext from './PlacesContext';
//Reducer:
import { placesReducer } from './reducer/PlacesReducer';
import { SET_USER_LOCATION } from './reducer/actionsTypes';
//Helpers:
import { getUserLocation, MENSAJE_ERROR_GEOLOCATION } from '../../helpers';

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

    return (
        <PlacesContext.Provider value={{
            ...placesState
        }}>
            {children}
        </PlacesContext.Provider>
    );
}

export default PlacesProviders;