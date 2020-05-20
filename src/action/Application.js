import { SET_LOCATION } from './actionTypes';

export const setUserLocation = (payload) => async (dispatch, getstate, api) => {
    dispatch({type: SET_LOCATION, payload});
}

