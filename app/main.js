'use strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import { Router, Route, Link, IndexRoute, IndexRedirect, browserHistory, hashHistory } from 'react-router';
import { HashRouter, BrowserRouter } from 'react-router-dom';

import store from './store';
import App from './containers/AppContainer'
import TextInterface from './containers/TextInterface'

render (
  <Router history={browserHistory}>
	  <Route path="/" component={App} />
	  <Route path="/type" component={TextInterface} />
  </Router>,
  document.getElementById('app')
)