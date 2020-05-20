import { SET_DEAL_SEARCH } from '../action/actionTypes';

const initialState = {
    dealSearch: null
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_DEAL_SEARCH:
            return {
                ...state,
                dealSearch: action.payload
            };
        default:
            return state;
    }
};