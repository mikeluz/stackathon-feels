'use strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import { Router, Route, Link, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { HashRouter, BrowserRouter } from 'react-router-dom';

import store from './store';
import App from './containers/AppContainer'

render (
  <Provider store={store}>
	  <Router history={hashHistory}>
		  <Route path="/" component={App} />
	  </Router>
  </Provider>,
  document.getElementById('app')
)