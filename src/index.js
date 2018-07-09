import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './cockpit/app.jsx';

// Material css Import
// import './assets/scss/material-kit-react.scss'; 
// GLobal scss Import
import './style.css';

ReactDom.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.querySelector("#root")

);
