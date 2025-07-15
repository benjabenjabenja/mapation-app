//Types:
import { MapState } from '../MapProvider';
//Actions:
import { SET_MAP } from './actionsTypes';

export type MapAction = { type: typeof SET_MAP, payload: mapboxgl.Map }

export const mapReducer = (state: MapState, action: MapAction): MapState => {
    switch (action.type) {
        case SET_MAP:
            return {
                ...state,
                isMapReady: true,
                map: action.payload
            }
        default:
            return state;
    }
}

export default mapReducer;