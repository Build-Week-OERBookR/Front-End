import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import { BrowserRouter  as Router} from 'react-router-dom';
import {reducer as fetchIdReducers} from './reducer/login'
import {reducer as addToWishListReducer} from './reducer/addWishList'

import './index.css';
import App from './App';


import * as serviceWorker from './serviceWorker';

const rootReducers = combineReducers({
    idReducer: fetchIdReducers,
    addToWishList: addToWishListReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={ store }><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

