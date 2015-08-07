import assert from 'assert';
import React from 'react';
var Router = require('react-router').Router;
var Route = require('react-router').Route;
import createHistory from 'history/lib/createMemoryHistory';

var Login = require('../src/components/Login.js');
var App = require('../src/components/App.js');

var node = document.createElement('div');

function exec () {

  console.log('Update');
}

var h = createHistory('/');

console.log(h)

React.render((
  <Router history={h} onUpdate={exec}>
    <Route path='/' component={App}/>
    <Route path='/hello' component={Login}/>
  </Router>
), node, function() {

  console.log(node.innerHTML);
});
