'use strict';

import Hello from '../Hello.js';
import React from 'react/addons';
import RealReact from 'react';
import assert from 'assert';
import cheerio from 'cheerio';

const { TestUtils } = React.addons;

describe('Hello component', () => {

    it('shallow render', () => {

        const renderer = TestUtils.createRenderer();

        renderer.render(
            <Hello />
        );

        const output = renderer.getRenderOutput();

        assert.equal(output.type, 'h1', 'right tag h1');
    });

    it('#renders an h1', () => {

        const RenderedComponent = TestUtils.renderIntoDocument(<Hello />);

        const ButtonComponent = TestUtils.findRenderedDOMComponentWithTag(RenderedComponent, 'h1');

        const ButtonNode = React.findDOMNode(ButtonComponent);

        assert.equal(ButtonNode.textContent, 'Hello world!');
    });

    it('render component with #renderToString method', () => {

         var stringDOM = RealReact.renderToString(<Hello/>);

         var $ = cheerio.load(stringDOM);
         assert.equal($('h1').text(), 'Hello world!');
    });

    it('render component directly on global.document', () => {

         RealReact.render(<Hello/>, global.document.body);

         var $ = cheerio.load(global.document.body.innerHTML);
         assert.equal($('h1').text(), 'Hello world!');
     });
});
