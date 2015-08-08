'use strict';

var Login = require('./components/Login.js');
var App = require('./components/App.js');
var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var history = require('react-router/lib/HashHistory').history;

var rawRoutes = (
  <div>
    <Route path='/' component={App} />
    <Route path='login' component={Login} />
  </div>
);

var routes = (
  <Router history={history}>
    rawRoutes
  </Router>
);

module.exports = {
    routes: routes,
    rawRoutes: rawRoutes
};

