module.exports.a = 'a1';
// console.log('a-1');
const b = require('./4-loop-reference-2');
console.log('module a.b', b);
module.exports.a = 'a2';
// console.log('a-2');
