import React from 'react'
//Styled:
import styled, { keyframes } from 'styled-components';
//Helpers:
import { HOME_SCREEN } from '../../../helpers';

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

export const LoadingMap: React.FC = () => {
    return (
        <DivStyled className='loading-map d-flex justify-content-center align-items-center'>
            <div className='loading-map text-center'>
                <h3>{HOME_SCREEN.MAP_VIEW.LOADING_MAP.MESSAGE}</h3>
                <span>
                    {HOME_SCREEN.MAP_VIEW.LOADING_MAP.SUBMESSAGE}
                </span>
            </div>
        </DivStyled>
    );
}

export default LoadingMap