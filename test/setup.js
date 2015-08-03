'use strict';

import jsdom from 'jsdom';

var FAKE_DOM = '<html><body></body></html>';

function setDom () {

    if (typeof document !== 'undefined') {

        return;
    }

    global.document = jsdom.jsdom(FAKE_DOM);
    global.window   = document.defaultView;
    global.navigator = window.navigator;
}

setDom();
