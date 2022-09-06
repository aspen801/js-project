import { capitalize } from '../functions/capitalize.js';
import assert from 'node:assert/strict';

assert.equal(capitalize('hello'), 'Hello');

  
assert.equal(capitalize(''), '');

console.log('Tests passed!');