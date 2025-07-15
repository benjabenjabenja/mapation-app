import React from 'react';
//Context:
import { MapProvider, PlacesProvider } from './context';
//Screens:
import HomeScreen from './screens/HomeScreen';
//Helpers:
import { MUTATION_APP } from './helpers/const';

const MapationApp: React.FC = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <h1>{MUTATION_APP.TITLE}</h1>

                {/* HOME SCREEN */}
                <HomeScreen />

            </MapProvider>
        </PlacesProvider>
    );
}

export default MapationApp