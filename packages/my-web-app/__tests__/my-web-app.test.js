'use strict';

const myWebApp = require('..');
const assert = require('assert').strict;

assert.strictEqual(myWebApp(), 'Hello from myWebApp');
console.info('myWebApp tests passed');
