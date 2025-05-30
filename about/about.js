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

// Initialize Bootstrap tooltips
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
