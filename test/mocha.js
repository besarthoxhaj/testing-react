// 'use strict';
//
// import Hello from '../Hello.js';
// import React from 'react/addons';
// import RealReact from 'react';
// import assert from 'assert';
//
// const { TestUtils } = React.addons;
//
// describe('Hello component', () => {
//
//     it('shallow render', () => {
//
//         const renderer = TestUtils.createRenderer();
//
//         renderer.render(
//             <Hello />
//         );
//
//         const output = renderer.getRenderOutput();
//
//         assert.equal(output.type, 'h1', 'right tag h1');
//     });
//
//     it('#renders an h1', () => {
//
//         const RenderedComponent = TestUtils.renderIntoDocument(<Hello />);
//
//         const ButtonComponent = TestUtils.findRenderedDOMComponentWithTag(RenderedComponent, 'h1');
//
//         const ButtonNode = React.findDOMNode(ButtonComponent);
//
//         console.log('Render jsdom: ', global.document.body.innerHTML);
//         // console.log('Button node: ', ButtonNode);
//     });
//
//     it('try directly to global.document', () => {
//
//          var stringDOM = RealReact.renderToString(<Hello/>);
//          console.log('String: ', stringDOM);
//          RealReact.render(<Hello/>, global.document.body);
//
//          console.log('Try again: ', global.document.body.innerHTML);
//      });
// });
