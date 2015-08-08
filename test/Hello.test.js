import expect from 'expect';
import React from 'react/addons';
import MemoryHistory from 'react-router/lib/MemoryHistory'
var { click } = React.addons.TestUtils.Simulate;

describe('The route component', function () {

    var compileRoutes = require('../src/routes.js');
    var node;

    beforeEach(function () {

      node = document.createElement('div');
    });

    it('should render correctly on "/" path', function (done) {

        React.render((
            compileRoutes(new MemoryHistory('/'))
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
            compileRoutes(new MemoryHistory('/'), exec)
        ), node, function () {

          click(node.querySelector('a'), { button: 0 });
        });
    });
});

