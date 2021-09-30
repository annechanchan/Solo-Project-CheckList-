import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
//import { BrowserRouter } from 'react-router-dom';

// uncomment so that webpack can bundle styles
//import styles from './scss/application.scss';

render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,

  <App />,
  document.getElementById('app')
);
