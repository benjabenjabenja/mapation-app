import React, { useContext } from 'react'
//Context:
import { PlacesContext } from '../../context/';
//Helpers:
import { SEARCH_RESULTS } from '../../helpers';
//Entitys:
import { Feature } from '../../entitys';
//Styled:
import styled from 'styled-components';
//Components:
import { LoadingSearch } from './LoadingSearch';

const PStyled = styled.p`
    font-size: 12px;
    margin: 0;
`;

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
        return <LoadingSearch />;
    }

    if (places.length === 0) return <></>;

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