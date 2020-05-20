import { SET_LOGIN, SET_AUTHENTICATED } from '../action/actionTypes';

const initialState = {
    token: {},
    user: {
        name: "",
        email: "",
        login: "",
        password: "",
        location: {
            lat: 0,
            lng: 0,
            address: "",
            city: "",
            state: "",
            zip_code: 0,
        }        
    },
    isAuthenticated: false
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_LOGIN:
            return {
                ...action.payload
            };
        case SET_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.value
            };
        default:
            return state;
    }
};