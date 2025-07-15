import React, { useContext, useLayoutEffect, useRef } from 'react'
//Context:
import { MapContext, PlacesContext } from '../../../context';
//Components:
import { LoadingMap } from './LoadingMap';
//Styled:
import styled from 'styled-components';
//Helpers:
import { HOME_SCREEN } from '../../../helpers';
//Mapbox:
import mapboxgl from 'mapbox-gl';

const DivStyled = styled.div`
    background-color: lightred;
    height: 100vh;
    left: 0;
    padding: .8rem;
    position: fixed;
    top: 20;
    width: 100vw;
`;

export const MapView: React.FC = () => {

    const { isLoading, userLocation } = useContext(PlacesContext);
    const { setMap } = useContext(MapContext);
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!isLoading) {

            const options: mapboxgl.MapboxOptions = {
                container: mapDiv.current!,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: userLocation,
                zoom: 14
            }

            const map = new mapboxgl.Map(options);

            if (map) setMap(map);
        }
    }, [isLoading]);

    if(isLoading) return <LoadingMap />;

    if(!userLocation) return <h3>{HOME_SCREEN.MAP_VIEW.ERROR_GEOLOCATION}</h3>;

    return (
        <DivStyled ref={mapDiv}>
            <h3>
                {JSON.stringify(userLocation)}
            </h3>
        </DivStyled>
    );
}

export default MapView