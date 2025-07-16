import React, { useContext, useLayoutEffect, useRef } from 'react'
//Context:
import { MapContext, PlacesContext } from '../../../context';
//Components:
import { LoadingMap } from './LoadingMap';
//Styled:
import styled from 'styled-components';
//Helpers:
import { COLORS, ERRORS, HOME_SCREEN } from '../../../helpers';
//Mapbox:
import mapboxgl from 'mapbox-gl';

const DivStyled = styled.div`
    background-color: ${COLORS.BACKGROUND};
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
            
            console.log({
                userLocation
            });
            
            const options: mapboxgl.MapboxOptions = {
                container: mapDiv.current!,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: userLocation,
                zoom: HOME_SCREEN.MAP_VIEW.ZOOM_DEFAULT
            }
            
            const map = new mapboxgl.Map(options);
            
            if (map) setMap(map);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    if (isLoading) return (
        <LoadingMap />
    );

    if (!userLocation) return (
        <DivStyled className='d-flex justify-content-center align-items-center'>
            <h3>{ERRORS.NO_USER_LOCATION}</h3>
        </DivStyled>
    );

    return (
        <DivStyled ref={mapDiv} />
    );
}

export default MapView