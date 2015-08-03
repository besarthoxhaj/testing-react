'use strict';

import Hello from '../Hello.js';
import React from 'react/addons';
import assert from 'assert';

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

        console.log('Button node: ', ButtonNode);
    })
})
