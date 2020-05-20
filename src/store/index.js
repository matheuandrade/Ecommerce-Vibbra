import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import Api from '../utils/FakeApi';

import { reducer as contentAuthentication } from '../reducer/Authentication';
import { reducer as contentApplication } from '../reducer/Application';
import { reducer as contentDeal } from '../reducer/Deal';

import { connectRouter } from 'connected-react-router';
 
const initialState = { };

export default function configureStore(history){
    const api = new Api();

    const middleware = [
        thunk.withExtraArgument(api),
        routerMiddleware(history)
    ];

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window;
    if(windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__){
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(
        rootReducer(history),
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}

function rootReducer(history){
    return combineReducers({
        authentication: contentAuthentication,
        application: contentApplication,
        deal: contentDeal,
        router: connectRouter(history)
    });
}