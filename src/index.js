import React from 'react';
import ReactDom from 'react-dom';

import App from './cockpit/app.jsx';

// Material css Import
import './assets/scss/material-kit-react.scss';
// GLobal scss Import
import './scss/style.scss';

ReactDom.render(
  <App/>,
  document.querySelector("#root")
)
