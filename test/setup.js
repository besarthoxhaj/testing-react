'use strict';

import jsdom from 'jsdom';

var FAKE_DOM = '<html><body><div>jsDom</div></body></html>';

function setDom () {

    if (typeof document !== 'undefined') {

        return;
    }

    global.document = jsdom.jsdom(FAKE_DOM);
    global.window   = document.defaultView;
    global.navigator = window.navigator;

    console.log('Just created dom: ', global.document.body.innerHTML);
}

setDom();
