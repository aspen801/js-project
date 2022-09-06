import _ from 'lodash';

if(_.get({ hello: 'world' }, 'hello') !== 'world'){
    throw new Error('Function works incorrect');
} 

if(_.get({ hello: 'world' }, 'hello', 'kitty') !== 'world'){
    throw new Error('Function works incorrect')
} 

if(_.get({}, 'hello', 'kitty') !== 'kitty'){
    throw new Error('Function works incorrect')
} 

console.log('Tests passed!')