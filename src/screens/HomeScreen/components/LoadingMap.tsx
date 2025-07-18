import React from 'react'
//Helpers:
import { HOME_SCREEN } from '../../../helpers';
import { LoadingWrapper } from '../../../hoc';

export const LoadingMap: React.FC = () => {
    return (
        <LoadingWrapper>
            <div className='loading-wrapper text-center'>
                <h3>{HOME_SCREEN.MAP_VIEW.LOADING_MAP.MESSAGE}</h3>
                <span>
                    {HOME_SCREEN.MAP_VIEW.LOADING_MAP.SUBMESSAGE}
                </span>
            </div>
        </LoadingWrapper>
    );
}

export default LoadingMap