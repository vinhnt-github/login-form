import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {MainContextProvider} from './contexts/Main.context';
import { 
  BrowserRouter as Router,
} from 'react-router-dom';
import {AppProvider} from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/dist/styles.css'


ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <AppProvider i18n={en}>
        <Router>
            <App />
        </Router>
      </AppProvider>
    </MainContextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
