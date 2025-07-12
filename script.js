document.addEventListener('DOMContentLoaded', function () {

    // スクロールに応じたフェードインアニメーション
    const sections = document.querySelectorAll('section');

    const options = {
        root: null, // ビューポートをルートとする
        rootMargin: '0px',
        threshold: 0.1 // 10%見えたら発火
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // ナビゲーションバーの背景をスクロールで変更
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

});
