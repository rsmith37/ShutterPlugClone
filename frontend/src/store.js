import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

const initialState = {};

const middleware = [thunk];

const devTools = process.env.NODE_ENV === 'development' ? window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION() : null

const store = createStore(
  rootReducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
