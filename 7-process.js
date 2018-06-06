
console.log(`process.arch:${process.arch}`); // 返回当前系统的cpu架构如：X64

console.log(`process.argv:${process.argv}`); // 返回启动nodejs进程时的命令后参数 第一个是execPath,(node/bin/),第二个是当前执行的文件路径，后面的是后面接的所有参数

console.log(`process.argv0:${process.argv0}`); // 启动的命令 基本都为node 无论是使用node，nodemon,pm2 都一样

console.log(`process.channel:${process.channel}`); //如果Node.js进程是由IPC channel(请看 Child Process 文档) 方式创建的，process.channel属性保存IPC channel的引用。 如果IPC channel不存在，此属性值为undefined。

console.log(`process.chdir:${process.chdir}`);

console.log(`process.config:${JSON.stringify(process.config)}`);

console.log(`process.cwd:${process.cwd()}`);

console.log(`process.debugPort:${process.debugPort}`);

console.log(`process.env:${JSON.stringify(process.env)}`);