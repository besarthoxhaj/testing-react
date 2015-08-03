# Testing react

A small example on testing react. The tools we are gonna use are:

    - react/addons
    - jsdom
    - mocha

## Mocha

In order to test react components with mocha we need a pre-compiler to compile es6 and jsx.

    npm install babel babel-loader jsdom --save-dev

## Vanilla jsDom

Is possible to render a component directley in jsdom.

```js
// --- Hello.js

import React from 'react';

var Hello = React.createClass({

    render: function () {
        
        return (
            <h1>Hello world!</h1>
        );
    }
});

module.exports = Hello;

// --- test.js

import React from 'react';
import jsdom from 'jsdom';
import Hello from './Hello.js';

jsdom.env('', {
  virtualConsole: jsdom.createVirtualConsole().sendTo(console),
  scripts: ['http://code.jquery.com/jquery-2.1.1.js'],
  done: function (err, window) {

      var $ = window.$;

      global.window = window;
      global.document = window.document;

      React.render(<Hello />, global.document.body);
      console.log('Title: ', $('h1').text());
      done();
  }
});
``` 

## Testing routing

Sometimes for any number of reason we may want to test some sort of interactio where the user gets redirected.


