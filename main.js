const toggler = document.getElementById("checkbox");
const menu = document.getElementById("menu");
const body = document.getElementById("body");

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

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("#menu a");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      document.getElementById("menu").classList.remove("ject__nav-menu-toggle");
      body.classList.remove("body-block");
      document.getElementById("checkbox").checked = false;
    });
  });
});

document.querySelectorAll(".faq__question").forEach((question) => {
  question.addEventListener("click", () => {
    document.querySelectorAll(".careers__faq-question").forEach((faqBlock) => {
      faqBlock.classList.remove("active__faq");
    });

    const parent = question.parentNode;
    if (parent && parent.classList) {
      parent.classList.add("active__faq");
    }
  });
});

let maxHeight = 0,
  maxWidth = 0;
const values = document.querySelectorAll(".ject__more-content_values-value");

values.forEach((value) => {
  const height = value.offsetHeight;
  const width = value.offsetWidth;
  maxHeight = Math.max(maxHeight, height);
  maxWidth = Math.max(maxWidth, width);
});
values.forEach((value) => {
  value.style.height = maxHeight + "px";
  value.style.width = maxWidth + "px";
});

document.addEventListener("DOMContentLoaded", function () {
  let heroBackground = document.querySelector(".background-image-hero");
  setupParallax(heroBackground);

  let moreBackground = document.querySelector(".background-image-more");
  setupParallax(moreBackground);
});

function setupParallax(heroBackground) {
  function handleParallax() {
    let rect = heroBackground.getBoundingClientRect();
    let translateY = rect.top * 0.2;
    heroBackground.style.transform = "translateY(" + translateY + "px)";
  }

  window.addEventListener("scroll", handleParallax);
  handleParallax();
}

function ScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
document.querySelectorAll(".home__button").forEach((button) => {
  button.addEventListener("click", ScrollToTop);
});

document.querySelectorAll(".about__button").forEach(button => {
  button.addEventListener("click", () => {
  document.querySelector(".ject__about").scrollIntoView({
    behavior: "smooth",
  });
});
})

document.querySelectorAll(".careers__button").forEach(button => {
  button.addEventListener("click", () => {
  document.querySelector(".ject__careers").scrollIntoView({
    behavior: "smooth",
  });
});
})

document.querySelector(".nav__button").addEventListener("click", () => {
  document.querySelector(".ject__footer").scrollIntoView({
    behavior: "smooth",
  });
});

document.querySelector("#footer").addEventListener("click", () => {
  document.querySelector(".ject__footer").scrollIntoView({
    behavior: "smooth",
  });
});
