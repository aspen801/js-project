import _ from 'lodash';
import assert from 'node:assert/strict';

assert.deepEqual(_.take([1, 2, 3], 2), [1,2]);
assert.deepEqual(_.take([], 2), []);
assert.deepEqual(_.take([1, 2, 3]), [1]);
assert.deepEqual(_.take([4, 3], 9), [4,3]);

console.log('All tests passed!')

