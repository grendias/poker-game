import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import otherPlayersReducer from './redux/reducers/OtherPlayersReducer';
import { BrowserRouter, Route } from 'react-router-dom';

const reducer = combineReducers({
        otherPlayers: otherPlayersReducer,
    }
);

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
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));