

/** area2**/
// document.addEventListener('scroll', handleScroll)
// function handleScroll() {
//     const area2 = document.querySelector('.area2')
//     const circle = document.querySelector('.circle')
//     const content = document.querySelector('.area2 .content')
//     const area2Position = area2.getBoundingClientRect().top
//     const screenPosition = window.innerHeight / 1.2

//     if (area2Position < screenPosition) {
//         const contentRightEdge = content.getBoundingClientRect().right
//         const targetPosition = contentRightEdge - 100
//         const currentLeft = circle.getBoundingClientRect().left
//         const moveDistance = targetPosition - currentLeft

//         circle.style.transform = `translateX(${moveDistance}px)`
//         circle.classList.add('animate')

//         document.removeEventListener('scroll', handleScroll)
//     }
// }


document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector(' .area2 > .content > .circle')
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.style.animationPlayState = 'running'
                    observer.unobserve(target) // 可選：動畫執行一次後停止監聽
                }
            })
        },
        { threshold: 1 }
    )
    target.style.animationPlayState = 'paused' // 初始化為暫停
    observer.observe(target)
})


document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.area2 > .content > .title-box')
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
    const target = document.querySelector('    .area2 > .content > .title-1 ')
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


/** area3**/



document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.area3 > .content > .title-box > .title > .container')
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
    const targets = document.querySelectorAll('.area3 > .content > .title-box .title-2');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    targets.forEach((target) => {
        target.style.animationPlayState = 'paused'; // 初始化为暂停
        observer.observe(target);
    });
});



/** area4**/

document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.area4 > .content > .circle');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.style.animationPlayState = 'running';
                } else {
                    target.style.animationPlayState = 'paused'; // 离开视口时暂停动画
                }
            });
        },
        { threshold: 0.2 }
    );

    target.style.animationPlayState = 'paused'; // 初始化为暂停
    observer.observe(target);
});
document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.area4 > .content > .title-box .title-1');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.style.animationPlayState = 'running';
                } else {
                    target.style.animationPlayState = 'paused'; // 离开视口时暂停动画
                }
            });
        },
        { threshold: 0.2 }
    );

    target.style.animationPlayState = 'paused'; // 初始化为暂停
    observer.observe(target);
});
document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.area4 > .content > .title-box .title-2');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.style.animationPlayState = 'running';
                } else {
                    target.style.animationPlayState = 'paused'; // 离开视口时暂停动画
                }
            });
        },
        { threshold: 0.2 }
    );

    target.style.animationPlayState = 'paused'; // 初始化为暂停
    observer.observe(target);
});


/** area5**/
document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('    .area6 > .content > .title-box .title-2 ')
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
    const target = document.querySelector('    .area6 > .content > .title-box > .title > .container')
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


/** area6 **/

document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.area6 > .content > .title-box .title-1,.area6 > .content > .title-box .title-4')
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
    const target = document.querySelector('.area6 > .content > .title-box .title-4')
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
    const target = document.querySelector('.area6 > .content > .container > .circle');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.style.animationPlayState = 'running';
                } else {
                    target.style.animationPlayState = 'paused'; // 离开视口时暂停动画
                }
            });
        },
        { threshold: 0.2 }
    );

    target.style.animationPlayState = 'paused'; // 初始化为暂停
    observer.observe(target);
});



/** area7 **/

document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('    .area7 > .content > .title-box .title-1')
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
    const target = document.querySelector('    .area7 > .content > .title-box .title-3')
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
    const target = document.querySelector('.area7 > .circle')
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

/** area8 **/

document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('    .area7 > .content > .title-box .title-1')
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


/** area8 **/

document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.area8 > .content > .title-box .title-2 ')
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
    const target = document.querySelector('  .area8 > .content > .title-box > .title > .container  ')
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


/** area9 **/

document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.area9 > .content > .title-box > .title > .container')
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
    const target = document.querySelector('  .area9 > .content > .title-box .title-2 ')
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