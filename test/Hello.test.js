import expect from 'expect';
import React from 'react/addons';
import { Router  } from 'react-router';
import MemoryHistory from 'react-router/lib/MemoryHistory'
var { click } = React.addons.TestUtils.Simulate;

describe('The route component', function () {

    var rawRoutes = require('../src/routes').rawRoutes;
    var node;

    beforeEach(function () {

      node = document.createElement('div');
    });

    it('should render correctly on "/" path', function (done) {

        React.render((
          <Router history={new MemoryHistory('/')}>
            {rawRoutes}
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
            {rawRoutes}
          </Router>
        ), node, function () {

          click(node.querySelector('a'), { button: 0 });
        });
    });
});

