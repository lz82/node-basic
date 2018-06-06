const b1 = Buffer.alloc(10); // 初始化一个长度为10的buffer实例

const b2 = Buffer.alloc(10, 1); // 初始化一个长度为10用1填充buffer实例

const b3 = Buffer.allocUnsafe(10); // 比alloc更快，但是不够安全，可能包含旧数据

const b4 = Buffer.from('test'); // 从一个字符串创建一个buffer

const b41 = Buffer.from('test', 'base64'); // 从一个字符串创建一个制定编码(base64)的buffer

const b5 = Buffer.from([1,2,3,4,5]); // 从一个数组创建一个buffer

const b6 = Buffer.from(b5); // 从一个buffer创建一个buffer

const bi = Buffer.from('I ');

const blove = Buffer.from('Love ');

const bu = Buffer.from('You');

const bsymbol = Buffer.from('!');

const bcontact = Buffer.concat([bi, blove, bu, bsymbol]); // buffer 拼接

console.log('b1', b1);

console.log('b2', b2);

console.log('b3', b3);

console.log('b4', b4);

console.log('b4-base64', b41);

console.log('b5', b5);

console.log('b6', b6);

console.log('bcontact', bcontact.toString());