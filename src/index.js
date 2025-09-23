import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Nav from './shared/components/Header';
import Config3 from './app/routes/Config3.js';
import Config1 from './app/routes/Config1.js';
import Config2 from './app/routes/Config2.js';
import EstateIV from './features/users/pages/EstateInstalledVersions'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <EstateIV />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
