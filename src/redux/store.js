import {
    createStore,
    applyMiddleware
} from 'redux'
import {
    persistStore
} from 'redux-persist'
import {
    logger
} from 'redux-logger'
import combineReducers from './root-reducer';
const middlewares = [logger];
export const store = createStore(combineReducers, applyMiddleware(...middlewares));
//const store = createStore(rootReducer, applyMiddleware(logger)); We can do it in this way bat array makes out code reusable as we can add more middleware to our array
export const persistor = persistStore(store)
export default {
    store,
    persistor
}