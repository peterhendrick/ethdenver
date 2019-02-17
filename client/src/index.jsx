import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { Web3Provider } from 'react-web3';
import { store } from './helpers';
import { App } from './App';
const web3Util = require('./initWeb3.js')
let web3js;
window.addEventListener('load', function() {

    // web3Util.init();


    // // Now you can start your app & access web3 freely:
    // startApp()
    render(
        <Provider store={store}>
            {/* <Web3Provider store={store}> */}
                <App />
            {/* </Web3Provider> */}
        </Provider>,
        document.getElementById('app')
    );

  });



