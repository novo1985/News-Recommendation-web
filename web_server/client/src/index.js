import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory, Router } from 'react-router';
import routes from './routes';

// main function
ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
