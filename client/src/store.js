import {createStore, applyMiddleware, compose} from 'redux';
import initialState from './state';
import reducers from './reducers';
import thunk from 'redux-thunk';

const middleware = [thunk]

const store = createStore(reducers, initialState, compose(applyMiddleware(...middleware)))

export default store;