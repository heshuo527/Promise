// 1.引入 fs 模块
const fs = require('fs')
fs.readFile('./data/古诗.md', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
})

// 2. 使用Promise封装
const p = new Promise((resolve, reject) => {
    fs.readFile("./data/古诗.md", (err, data) => {
        //判断如果失败
        if(err) reject(err)
        //如果成功
        resolve(data.toString())
    })
})

p.then((value) => {
    console.log(value);
}, (reason) => {
    console.log('读取失败!', reason);
})

