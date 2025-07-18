import React from 'react'
//Helpers:
import { SEARCH_RESULTS } from '../../helpers'
//Hoc:
import { LoadingWrapper } from '../../hoc'

export const LoadingSearch: React.FC = () => {
  return (
    <LoadingWrapper>
        <div className='loading-wrapper text-center'>
            <h3>{SEARCH_RESULTS.LOADING.TITLE}</h3>
            <span>
                {SEARCH_RESULTS.LOADING.SUBMESSAGE}
            </span>
        </div>
    </LoadingWrapper>
  )
}

export default LoadingSearch