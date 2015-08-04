'use strict';

import React from 'react';

import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import LoginHandler from './components/Login.js';

var App = React.createClass({
  render() {
      return (
        <div>
            <h1>Route</h1>
            <Link to="app">Home</Link>
            <Link to="login">Login</Link>

            {/* this is the important part */}
            {this.props.children}
        </div>
        );
    }
});

var routes = (
    <Router history={history}>
        <Route path="/" component={App}>
          <Route path="login" component={LoginHandler}/>
        </Route>
    </Router>
);

var test = React.createClass({

    render: function () {

        return (<h1>Hello</h1>);
    }
});

module.exports = {
    test: test,
    routes: routes
};

React.render(routes, document.body);

