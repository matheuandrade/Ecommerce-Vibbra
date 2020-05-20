import { SET_LOCATION } from '../action/actionTypes';

const initialState = {
        location: {
            lat: 0,
            lng: 0
    }  
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_LOCATION:
            return {
                ...state,
                location: action.payload
            };
        default:
            return state;
    }
};

