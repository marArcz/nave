import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import './styles/custom.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/">
    <App/>
  </BrowserRouter>
);

