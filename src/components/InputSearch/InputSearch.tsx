import React, { useContext, useEffect } from 'react'
//Styled:
import styled from 'styled-components'
//Helpers:
import { HOME_SCREEN, InputTypes, COLORS, INPUT_SEARCH } from '../../helpers';
//Hooks:
import { useDebounce } from '../../hooks/useDebounce';
//Context:
import { PlacesContext } from '../../context';
//Components:
import SearchResults from './SearchResults';

/* INPUT SEARCH */
const InputStyled = styled.input`
    background-color: #fff;
    border-radius: 1rem;
    border: 1px solid transparent;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    left: 25px;
    outline-color: ${COLORS.PRIMARY};
    position: fixed;
    top: 65px;
    transition: all 0.66s ease;
    z-index: 9999;
    padding: .28rem .5rem;
`;

export const InputSearch: React.FC = () => {
    const { debounce, setValue, value } = useDebounce(HOME_SCREEN.MAP_VIEW.DEBOUNCE_TIME);
    const { fetchPlaces } = useContext(PlacesContext);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const callback = (value: unknown) => {
            if (!value) return;
            if (typeof value !== 'string') return;
            
            //TODO: Realizar la busqueda
            console.log({
                searched: value
            });

            fetchPlaces(value);
        }
        debounce(callback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <>
            {/* INPUT SEARCH */}
            <InputStyled
                type={InputTypes.SEARCH}
                placeholder={INPUT_SEARCH.PLACEHOLDER}
                onChange={onInputChange}
            />

            {/* SEARCH RESULTS */}
            <SearchResults />
        </>
    );
}

export default InputSearch