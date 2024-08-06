import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

import './assets/css/styles.css';

// -----------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/Homepage_of_Deploy/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
