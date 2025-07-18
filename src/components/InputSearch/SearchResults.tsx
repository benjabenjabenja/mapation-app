import React, { useContext } from 'react'
//Context:
import { PlacesContext } from '../../context/';
//Helpers:
import { SEARCH_RESULTS } from '../../helpers';
//Styled:
import styled, { keyframes } from 'styled-components';
import { Feature } from '../../entitys';

const fadeAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const DivStyled = styled.div`
    animation: ${fadeAnimation} 0.66s ease-in-out;
    &.loading-map {
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 10px;
        color: #fff;
        font-size: 1.2rem;
        height: 100vh;
        padding: 10px;
        position: fixed;
        right: 0;
        top: 0;
        width: 100vw;
    }
`;

const PStyled = styled.p`
    font-size: 12px;
    margin: 0;
`;

const LoadingPlaces: React.FC = () => {
    return (
        <DivStyled className='loading-map d-flex justify-content-center align-items-center'>
            <div className='loading-map text-center'>
                <h3>{SEARCH_RESULTS.LOADING.TITLE}</h3>
                <span>
                    {SEARCH_RESULTS.LOADING.SUBMESSAGE}
                </span>
            </div>
        </DivStyled>
    );
}

const PlaceItem: React.FC<{ place: Feature }> = ({ place }) => {
    return (
        <li className='list-group-item list-group-item-action pointer'>
            <h6>{SEARCH_RESULTS.NOMBRE_LUGAR}</h6>
            <PStyled className='text-muted'>
                {place.place_name}
            </PStyled>

            <button className='btn btn-sm btn-outline-primary'>
                {SEARCH_RESULTS.DIRECTIONS}
            </button>
        </li>
    );
}

export const SearchResults: React.FC = () => {
    const { places, isLoadingPlaces } = useContext(PlacesContext);

    if (isLoadingPlaces) {
        return <LoadingPlaces />;
    }

    return (
        <ul className='list-group mt-3'>
            {
                places.map((place, index) => (
                    <PlaceItem key={index} place={place} />
                ))
            }
        </ul>
    );
}

export default SearchResults