// 1.引入 fs 模块
const fs = require('fs')
// 引入 util模块
const util = require('util')
/* fs.readFile('./data/古诗.md', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
}) */

/* // 2. 使用Promise封装
function promise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            //如果成功
            resolve(data.toString())
            //判断如果失败
            if(err) reject(err)
        })
    })
    
}
promise('./data/古诗.md').then((value) => {
    console.log(value);
}, (reason) => {
    console.log('读取失败!', reason);
}) */

// 使用util模块
let findMe = util.promisify(fs.readFile)

findMe('./data/古诗.md').then(value => {
    console.log(value.toString());
})