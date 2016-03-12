'use strict';

const co = require('co');
const assert = require('assert');

co(function() {
    return Promise.resolve(1);
})
.then(function(r) {
    console.log('r = ' + r);
})
.catch(function() {
    console.log('error happen');
});

function* ga() {
    yield 1;
    yield 2;
    return 6;
}
