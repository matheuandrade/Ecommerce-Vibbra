import { SET_DEAL_SEARCH } from './actionTypes';

export const createDeal = (payload) => async (dispatch, getstate, api) => {
    const response = await api.createDeal(payload);    
};

export const SearchDeal = (payload) => async (dispatch, getstate, api) => {
    const response = await api.dealSearch(payload);
    dispatch({type: SET_DEAL_SEARCH, payload: response});   
};