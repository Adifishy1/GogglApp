import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './contexts/StateContextProvider';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>
);


