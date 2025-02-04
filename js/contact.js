/** area1 **/
document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector(".area1 > .content > .text-box")
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.style.animationPlayState = 'running'
                    observer.unobserve(target) // 可選：動畫執行一次後停止監聽
                }
            })
        },
        { threshold: 0.2 }
    )
    target.style.animationPlayState = 'paused' // 初始化為暫停
    observer.observe(target)
})


/** area2 **/

document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector(".area2 > .content > .title-box .title-1")
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.style.animationPlayState = 'running'
                    observer.unobserve(target) // 可選：動畫執行一次後停止監聽
                }
            })
        },
        { threshold: 0.2 }
    )
    target.style.animationPlayState = 'paused' // 初始化為暫停
    observer.observe(target)
})

document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector(".area2 > .content > .title-box .title-4")
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.style.animationPlayState = 'running'
                    observer.unobserve(target) // 可選：動畫執行一次後停止監聽
                }
            })
        },
        { threshold: 0.2 }
    )
    target.style.animationPlayState = 'paused' // 初始化為暫停
    observer.observe(target)
})


document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector(" .area2 .circle")
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.style.animationPlayState = 'running'
                    observer.unobserve(target) // 可選：動畫執行一次後停止監聽
                }
            })
        },
        { threshold: 0.2 }
    )
    target.style.animationPlayState = 'paused' // 初始化為暫停
    observer.observe(target)
})


/** area4 **/
document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector(".area4 > .content > .title-box .title-2")
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.style.animationPlayState = 'running'
                    observer.unobserve(target) // 可選：動畫執行一次後停止監聽
                }
            })
        },
        { threshold: 0.2 }
    )
    target.style.animationPlayState = 'paused' // 初始化為暫停
    observer.observe(target)
})
document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector(" .area4 > .content > .title-box .title-1 h2")
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.style.animationPlayState = 'running'
                    observer.unobserve(target) // 可選：動畫執行一次後停止監聽
                }
            })
        },
        { threshold: 0.2 }
    )
    target.style.animationPlayState = 'paused' // 初始化為暫停
    observer.observe(target)
})
