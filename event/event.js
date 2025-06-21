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




const modal = document.getElementById("modal");
const modalTitle = modal.querySelector("h2");
const modalAuthor = modal.querySelector("p strong");
const modalBody = modal.querySelector(".modal-body");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".read-more").forEach(btn => {
  btn.addEventListener("click", () => {
    const title = btn.dataset.title;
    const author = btn.dataset.author;
    const content = btn.dataset.content;

    modalTitle.textContent = title;
    modalAuthor.textContent = author;
    modalBody.innerHTML = `<p>${content}</p>`;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
