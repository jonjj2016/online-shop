import {
    createStore,
    applyMiddleware
} from 'redux'
import {
    logger
} from 'redux-logger'
import combineReducers from './root-reducer';
const middlewares = [logger];
const store = createStore(combineReducers, applyMiddleware(logger));
//const store = createStore(rootReducer, applyMiddleware(logger)); We can do it in this way bat array makes out code reusable as we can add more middleware to our array

export default store