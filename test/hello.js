// 'use strict';
//
//
// import React from 'react';
// import jsdom from 'jsdom';
// import Hello from '../Hello.js';
//
// describe('jsdom with jquery', function () {
//
//     it('should work', function (done) {
//
//         jsdom.env('', {
//                   virtualConsole: jsdom.createVirtualConsole().sendTo(console),
//                   scripts: ['http://code.jquery.com/jquery-2.1.1.js'],
//                   done: function (err, window) {
//
//                       var $ = window.$;
//
//                       global.window = window;
//                       global.document = window.document;
//
//                       React.render(<Hello />, global.document.body);
//                       console.log('Title: ', $('h1').text());
//                       done();
//                   }
//         });
//     });
// });
