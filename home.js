
var menu = document.querySelector("#nav");
var icon = document.querySelector("#icon");
// var link = document.querySelector("#link");
// var link = document.getElementById("link");
const links = document.querySelectorAll("#link");


icon.addEventListener("click", ()=>{
    nav.classList.toggle("nav--open");
    icon.classList.toggle("icon--open");
});


links.forEach((link) => {
    
    link.addEventListener("click", ()=>{
        nav.classList.remove("nav--open");
        icon.classList.remove("icon--open");
    });

  });


  // JavaScript to handle the seamless looping
  const sliderTrack = document.querySelector('.slider-track');
  const cards = document.querySelectorAll('.card');
  
  // Clone the first few cards and append to end for seamless looping
  const originalCards = Array.from(cards).slice(0, 5); // Clone first 3 cards
  
  originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      sliderTrack.appendChild(clone);
  });
  
  // Reset position when animation completes
  sliderTrack.addEventListener('animationiteration', () => {
      // This creates the seamless loop effect
  });








  const fadeElements = document.querySelectorAll('.fade-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // 👈 remove on scroll out
      }
    });
  }, {
    threshold: 0.2 // only trigger when 20% is visible (feels nicer)
  });

  fadeElements.forEach(el => observer.observe(el));














  