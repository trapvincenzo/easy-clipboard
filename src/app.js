'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import easyClipboardApp from './reducers';
import App from './components/App';
import {send} from 'redux-electron-ipc';
import ipc from './ipc';

require('./stylesheet/app.scss');

let store = createStore(easyClipboardApp, applyMiddleware(ipc));

// Load saved data
store.dispatch(send('getSavedClipboard'));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app-root')
);
