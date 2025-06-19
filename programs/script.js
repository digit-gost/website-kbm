function initializeMasters() {
    document.querySelectorAll('.master-container').forEach(container => {
        const mainButton = container.querySelector('.toggle-button');
        container.addEventListener('click', () => {
            container.classList.toggle('active');
            mainButton.textContent = container.classList.contains('active') ? '+' : '+';
        });
    });

    document.querySelectorAll('.master-item .toggle-button').forEach(button => {
        button.addEventListener('click', e => {
            e.stopPropagation();
            const item = button.closest('.master-item');
            item.classList.toggle('active');
            button.textContent = item.classList.contains('active') ? '+' : '+';
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeMasters);

function addMasterItem() {
    const newItem = document.createElement('div');
    newItem.className = 'master-item';
    newItem.innerHTML = `
        <div class="master-title">Nouveau Master <button class="toggle-button">+</button></div>
        <div class="master-details"><p>Description du nouveau master.</p></div>`;
    document.getElementById('masters-list').appendChild(newItem);
    initializeMasters(); 
}


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

