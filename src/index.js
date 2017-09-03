import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageLayout from './components/page-layout/PageLayout';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducer = combineReducers({
});

const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
);

ReactDOM.render(
    <Provider store={store}>
        <PageLayout/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
