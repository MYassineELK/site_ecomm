import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Contex from './darckmode/Contex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter basename='CC1_react'>
   <Contex>
  <App />
  </Contex>
  </BrowserRouter>
 
  

);

reportWebVitals();
