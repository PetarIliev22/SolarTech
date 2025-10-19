const headerButtons = document.querySelectorAll('.btn-header');
headerButtons.forEach(button => {
  button.addEventListener('click', () => {
    headerButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const section = document.querySelector(button.dataset.target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

  const buttons = document.querySelectorAll('.btn-header');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const section = document.querySelector(btn.dataset.target);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });


const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });

  headerButtons.forEach(button => {
    button.classList.remove('active');
    if (button.dataset.target === `#${current}`) {
      button.classList.add('active');
    }
  });
});


const counters = document.querySelectorAll('.counter');
const speed = 150;

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const updateCount = () => {
      const current = +counter.innerText.replace(/,/g, '');
      const increment = target / speed;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });
};


const featureSection = document.querySelector('#features');
if (featureSection) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  });
  observer.observe(featureSection);
}


const testimonialCarousel = document.querySelector('#testimonialCarousel');
if (testimonialCarousel) {
  const carousel = new bootstrap.Carousel(testimonialCarousel, {
    interval: 3000,
    ride: 'carousel',
    pause: 'hover',
    wrap: true
  });
}

const toggler = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-menu');

toggler.addEventListener('click', () => {
  menu.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".php-email-form");
  const nameField = document.getElementById("ct-name");
  const emailField = document.getElementById("ct-email");
  const errorMessage = document.querySelector(".error-message");
  const successMessage = document.querySelector(".sent-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = nameField.value.trim();
    const email = emailField.value.trim();


    errorMessage.classList.add("d-none");
    successMessage.classList.add("d-none");

    
    if (name === "" || email === "") {
      errorMessage.textContent = "Please fill in your name and email before sending.";
      errorMessage.classList.remove("d-none");

      
      form.classList.add("shake");
      setTimeout(() => form.classList.remove("shake"), 500);
      return;
    }

    
    successMessage.classList.remove("d-none");
    form.reset();
  });
});