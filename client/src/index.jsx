import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Web3Provider } from 'react-web3';
import { store } from './helpers';
import { App } from './App';

// setup fake backend
// import { configureFakeBackend } from './helpers';
// configureFakeBackend();

render(
    <Provider store={store}>
        <Web3Provider store={store}>
            <App />
        </Web3Provider>
    </Provider>,
    document.getElementById('app')
);