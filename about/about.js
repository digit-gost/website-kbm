let lastScroll = 0;
const menu = document.querySelector('.menu');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll vers le bas
        menu.classList.add('hide-on-scroll');
    } else {
        // Scroll vers le haut
        menu.classList.remove('hide-on-scroll');
    }
    lastScroll = currentScroll;
});