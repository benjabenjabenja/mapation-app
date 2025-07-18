import React from 'react'
import styled, { keyframes } from 'styled-components';

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
    &.loading-wrapper {
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

export const LoadingWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <DivStyled className='loading-wrapper d-flex justify-content-center align-items-center'>
            {children}
        </DivStyled>
    );
}

export default LoadingWrapper