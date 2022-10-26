// 接口地址: https://movie.douban.com/subject/26654184/?from=showing

// 1. 创建对象
const p = new Promise((resolve, reJect) => {
    const xhr = new XMLHttpRequest();
    // 2. 初始化
    xhr.open('GET', 'https://www.lz13.cn/mingrenmingyan/184174.html', true)
    // 3. 发送
    xhr.send()
    // 4.绑定事件, 处理响应结果
    xhr.onreadystatechange = () => {
        // 判断
        if (xhr.readyState === 4) {
            // 判断响应码 200 -299 区间
            if (xhr.status >= 200 && xhr.status < 300) {
                //表示成功
                resolve(xhr.response);
            } else {
                //如果失败
                reJect(xhr.status);
            }
        }
    }
})