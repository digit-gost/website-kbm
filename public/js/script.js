// Active tous les popovers sur la page avec bootstrap
// Popover
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})






/* =++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=*/
//Countdown animation
// Get allValues using querySelectorAll
let allValues = document.querySelectorAll(".value");

function startCounting(singleValue) {
  let endValue = parseInt(singleValue.getAttribute("data-value"));
  let duration = Math.floor(7000 / endValue);
  let startValue = 0;

  let counter = setInterval(() => {
    startValue += 1;
    singleValue.textContent = startValue;

    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
}

// Observer pour déclencher l'animation au scroll
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let el = entry.target;
      startCounting(el);
      observer.unobserve(el); // Ne plus observer après le premier déclenchement
    }
  });
}, {
  threshold: 0.5 // Déclenche quand au moins 50% de l’élément est visible
});

// Appliquer l’observer à chaque élément .value
allValues.forEach((el) => {
  observer.observe(el);
});









/* =++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=*/
// Testimonial Slider
// Testimonial Slider


const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    if (i === index) t.classList.add('active');
  });
}

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 15000);






/* =++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=*/
//Slide in left cards on scroll
// Fonction pour afficher les cartes au défilement

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    function showCardsOnScroll() {
        const triggerPoint = window.innerHeight * 0.6; // 60% de la hauteur de l'écran
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < triggerPoint && rect.bottom > 0) {
                card.classList.add('visible');
            } 
        });
    }
    window.addEventListener('scroll', showCardsOnScroll);
    showCardsOnScroll(); // Pour le cas où les cards sont déjà visibles
});





/* =++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=*/
// Fonction pour afficher et réduire le menu au défilement

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


/* =++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=*/
