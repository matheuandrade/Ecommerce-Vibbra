import { SET_LOGIN, SET_AUTHENTICATED } from '../action/actionTypes';
import { login, logout } from '../utils/Auth';
import history from '../utils/History'; 

export const handleLogin = (payload) => async (dispatch, getstate, api) => {
    const response = await api.authenticate(payload);

    if(response?.data?.token && response?.data?.user){

        dispatch({type: SET_LOGIN, payload: {token: response.data.token, user: response.data.user}});
        dispatch({type: SET_AUTHENTICATED, value: true});

        const userToLogin = {
            token: response?.data?.token,
            user: response?.data?.user
        };

        login(userToLogin);

        return true;
    }else{
        dispatch({type: SET_AUTHENTICATED, value: false});
        
        return false;
    }  
}

export const handleSignOut = (payload) => async (dispatch, getstate, api) => {
    dispatch({type: SET_LOGIN, payload: {token: "", user: {}}});
    dispatch({type: SET_AUTHENTICATED, value: false});

    logout();

    history.push('/Login');
}