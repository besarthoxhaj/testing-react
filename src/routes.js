'use strict';

var Login = require('./components/Login.js');
var App = require('./components/App.js');
var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var history = require('react-router/lib/HashHistory').history;

module.exports = function (historyArg, onUpdateFun) {

    var historyArg = historyArg || require('react-router/lib/HashHistory').history;
    var onUpdateFun = onUpdateFun || function () {};

    return (
        <Router history={historyArg} onUpdate={onUpdateFun}>
            <Route path='/' component={App} />
            <Route path='login' component={Login} />
        </Router>
    );
};

