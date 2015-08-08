import assert from 'assert';
import expect from 'expect';
import React from 'react/addons';
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var MemoryHistory = require('react-router/lib/MemoryHistory');
var HashHistory = require('react-router/lib/HashHistory').history;

var { click } = React.addons.TestUtils.Simulate;

describe('The route component', function () {

    var Login = require('../src/components/Login.js');
    var App = require('../src/components/App.js');

    var node;

    beforeEach(function () {
      node = document.createElement('div');
    });

    it('should render correctly on "/" path', function (done) {

        React.render((
          <Router history={new MemoryHistory('/')}>
            <Route path='/' component={App}/>
            <Route path='/login' component={Login}/>
          </Router>
        ), node, function() {

            expect(node.innerHTML).toMatch(/Welcome to App/);
            done();
        });
    });

    it('should redirect to "/login" on link click', function (done) {

        function exec () {

          expect(node.innerHTML).toMatch(/Welcome to Login/);
          done();
        }

        React.render((
          <Router history={new MemoryHistory('/')} onUpdate={exec}>
            <Route path='/' component={App}/>
            <Route path='/login' component={Login}/>
          </Router>
        ), node, function () {

          click(node.querySelector('a'), { button: 0 });
        });
    });
});


