import React, { useContext } from 'react'
//Styled:
import styled from 'styled-components';
//Helpers:
import { BUTTON_LOCATION, HOME_SCREEN, COLORS, ERRORS } from '../../helpers';
//Context:
import { MapContext, PlacesContext } from '../../context';

const ButtonStyled = styled.button`
    position: fixed;
    white-space: nowrap;
    z-index: 9999;
    bottom: 25px;
    right: 25px;
    border-radius: 25rem;
    border: 1px solid transparent;
    background-color: ${COLORS.PRIMARY};
    outline-color: ${COLORS.PRIMARY};
    transition: all 0.66s ease;
`

const ButtonLocation: React.FC = () => {

    const { map, isMapReady } = useContext(MapContext);
    const { userLocation } = useContext(PlacesContext);

    const isDisabled = !isMapReady || !userLocation;

    const handleOnClick = () => {
        if (!isMapReady) throw new Error(ERRORS.ERROR_MAP);
        if (!userLocation) throw new Error(ERRORS.ERROR_USER_LOCATION);

        map?.flyTo({
            center: userLocation,
            zoom: HOME_SCREEN.MAP_VIEW.ZOOM_DEFAULT
        });
    }

    return (
        <ButtonStyled
            className='btn btn-secondary'
            onClick={handleOnClick}
            disabled={isDisabled}
        >
            {BUTTON_LOCATION.TEXT}
        </ButtonStyled>
    );
}

export default ButtonLocation