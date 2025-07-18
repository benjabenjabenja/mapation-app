//Types:
import { Feature } from "../../../entitys";
import { PlacesState } from "../PlacesProviders";
//Actions:
import { SET_LOADING_PLACES, SET_PLACES, SET_USER_LOCATION } from "./actionsTypes";

type PlacesAction = {
    type: typeof SET_USER_LOCATION;
    payload: [number, number];
} | {
    type: typeof SET_PLACES;
    payload: Feature[];
} | {
    type: typeof SET_LOADING_PLACES;
}

export const placesReducer = (state: PlacesState, action: PlacesAction): PlacesState => { 
    switch (action.type) {
        case SET_USER_LOCATION:
            return {
                ...state,
                isLoading: false,
                userLocation: action.payload
            }
        case SET_PLACES:
            return {
                ...state,
                isLoadingPlaces: false,
                places: action.payload
            }
        case SET_LOADING_PLACES:
            return {
                ...state,
                isLoadingPlaces: true
            }
        default:
            return state;
    }
}
