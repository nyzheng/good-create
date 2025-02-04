/** area2**/

document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.area2 > .content > .title-box .title-1 h2')
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.style.animationPlayState = 'running'
                    observer.unobserve(target) // 可選：動畫執行一次後停止監聽
                }
            })
        },
        { threshold: 0.1 }
    )
    target.style.animationPlayState = 'paused' // 初始化為暫停
    observer.observe(target)
})

document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector(".area2 > .content > .title-box .title-2")
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.style.animationPlayState = 'running'
                    observer.unobserve(target) // 可選：動畫執行一次後停止監聽
                }
            })
        },
        { threshold: 0.5 }
    )
    target.style.animationPlayState = 'paused' // 初始化為暫停
    observer.observe(target)
})

document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.area3 > .content .circle');

    // 初始化设置动画为暂停状态
    target.style.animationPlayState = 'paused';

    let isScrolling;

    // 当滚动事件发生时启动动画
    window.addEventListener('scroll', () => {
        target.style.animationPlayState = 'running';

        // 清除之前的timeout
        window.clearTimeout(isScrolling);

        // 设置一个新的timeout，滚动停止后暂停动画
        isScrolling = setTimeout(() => {
            target.style.animationPlayState = 'paused';
        }, 150); // 可以根据需要调整时间
    });
});

