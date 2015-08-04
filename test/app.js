'use strict';

import jsdom from 'jsdom';

describe('Move around with jsdom', function () {

    it('should get window.path', function (done) {

        jsdom.env('', {
           scripts: ['http://code.jquery.com/jquery-2.1.1.js'],
           done: function (err, window) {

               var $ = window.$;
               global.window = window;
               global.document = window.document;
               global.navigator = window.navigator;

               var React = require('react');
               var App = require('../src/App.js').routes;

               React.render(App, global.document.body);

               console.log('Body content: ', global.document.body.innerHTML);
               console.log('Check link: ', $('a:contains("Login")').text());

               $('a:contains("Login")').click();

               setTimeout(function () {

                   console.log('Body: ', global.document.body.innerHTML);
                   done();
               }, 1000);
           }
        });
    });
});
