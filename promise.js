var count = 0
const but = document.querySelector('button')
but.addEventListener('click', () => {
    count += 1
    if (count < 4) {
        let n = Math.random() * 10
        if (n < 1) {
            alert('天选之人! 获得菠萝手机一部!')
            console.log(n);
        } else if (n > 1 && n < 2) {
            alert('运气爆棚! 奖励蓝牙耳机一副!')
            console.log(n);
        } else if (n > 2 && n < 3) {
            alert('很遗憾! 没有中奖,再接再厉')
            console.log(n);
        } else if (n > 3 && n < 4) {
            alert('很遗憾! 没有中奖,再接再厉')
            console.log(n);
        } else if (n > 4 && n < 5) {
            alert('唯一一个不想要的奖品! 奖励加班三小时!')
            console.log(n);
        } else if (n > 5 && n < 6) {
            alert('很遗憾! 没有中奖,再接再厉')
            console.log(n);
        } else if (n > 6 && n < 7) {
            alert('笑死我了! 奖励劳斯莱斯10元代金券一张!')
            console.log(n);
        } else if (n > 7 && n < 8) {
            alert('很遗憾! 没有中奖,再接再厉')
            console.log(n);
        } else if (n > 8 && n < 9) {
            alert('前无古人, 后无来者! 奖励100个bug!')
            console.log(n);
        } else {
            alert('恭喜中奖! 奖励自己今晚十点睡觉!')
        }
        console.log('count', count);
    } else {
        alert('很遗憾!三次机会已用光!')
        return
    }
})