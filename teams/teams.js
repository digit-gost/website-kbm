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



// Add event listeners to the tab buttons
// and switch the active team display
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-btn");
    const teams = document.querySelectorAll(".team");

    tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        teams.forEach((team, i) => {
        if (i === index) {
            team.classList.add("active");
        } else {
            team.classList.remove("active");
        }
        });
    });
    });
});
