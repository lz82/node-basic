module.exports.b = 'b1';
// console.log('b-1');
const a = require('./4-loop-reference-1');
console.log('module b.a:', a);
module.exports.b = 'b2' ;

// console.log('b-2');