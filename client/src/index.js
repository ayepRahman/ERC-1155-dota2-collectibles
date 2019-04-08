import React from 'react';
import ReactDOM from 'react-dom';
import Web3Provider from 'web3-react';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { connecters } from 'utils/web3-connector';

ReactDOM.render(
  <BrowserRouter>
    <Web3Provider connecters={connecters}>
      <SnackbarProvider max={3}>
        <App />
      </SnackbarProvider>
    </Web3Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
