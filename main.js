const toggler = document.getElementById("checkbox");
const menu = document.getElementById("menu");
const body = document.getElementById("body")

toggler.addEventListener("click", () => {
  menu.classList.toggle("ject__nav-menu-toggle");
  body.classList.toggle("body-block");
});

// navbar scroll effect
var lastScrollTop;
let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

document.querySelectorAll('.faq__question').forEach(question => {
  question.addEventListener('click', () => {
    document.querySelectorAll('.careers__faq-question').forEach(faqBlock => {
      faqBlock.classList.remove('active__faq');
    });

    const parent = question.parentNode;
    if (parent && parent.classList) {
      parent.classList.add('active__faq');
    }
  });
});

let maxHeight = 0, maxWidth = 0;
const values = document.querySelectorAll(".ject__more-content_values-value");

values.forEach(value => {
  const height = value.offsetHeight;
  maxHeight = Math.max(maxHeight, height);
  
});
values.forEach(value => {
  value.style.height = maxHeight + "px";
})

document.addEventListener("DOMContentLoaded", function() {
  let heroBackground = document.querySelector('.background-image-hero');
  setupParallax(heroBackground);

  let moreBackground = document.querySelector('.background-image-more');
  setupParallax(moreBackground);
});

function setupParallax(heroBackground) {
  function handleParallax() {
    let rect = heroBackground.getBoundingClientRect();
    let translateY = (rect.top * 0.2);
    heroBackground.style.transform = 'translateY(' + translateY + 'px)';
  }

  window.addEventListener('scroll', handleParallax);
  handleParallax();
}