import React from 'react';
//Context:
import { MapProvider, PlacesProvider } from './context';
//Screens:
import HomeScreen from './screens/HomeScreen';
//Helpers:
import { COLORS, MUTATION_APP } from './helpers';
//Styled:
import styled from 'styled-components';

const MainStyled = styled.main`
    background-color: ${COLORS.BACKGROUND};
`

const MapationApp: React.FC = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <MainStyled className='d-flex flex-column'>
                    <h1>{MUTATION_APP.TITLE}</h1>
                    <HomeScreen />
                </MainStyled>
            </MapProvider>
        </PlacesProvider>
    );
}

export default MapationApp