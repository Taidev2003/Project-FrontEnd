const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav_toggle");
const navClose = document.getElementById("nav_close");
const navLink = document.querySelectorAll(".nav_link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    console.log("click");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    console.log("click");
  });
}

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);

const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

const activeLink = () => {
  const section = document.querySelectorAll("section");
  const navLink = document.querySelectorAll(".nav_link");
  let current = "home";

  section.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLink.forEach((item) => {
    item.classList.remove("active-link");
    if (item.href.includes(current)) {
      item.classList.add("active-link");
    }
  });
};

window.addEventListener("scroll", activeLink);

//dark mode

const themebutton = document.getElementById("theme-button");

if (localStorage.getItem("mode") == "dark") {
  darkmode();
} else {
  lighmode();
}

themebutton.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkmode();
  } else {
    lighmode();
  }
});

function darkmode() {
  document.body.classList.add("dark-theme");
  themebutton.classList.replace("fa-moon", "fa-sun");
  localStorage.setItem("mode", "dark");
}
function lighmode() {
  document.body.classList.remove("dark-theme");
  themebutton.classList.replace("fa-sun", "fa-moon");
  localStorage.setItem("mode", "light");
}

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: 400,
});

sr.reveal(".home_img");
sr.reveal(".home_data", { origin: "bottom" });

sr.reveal(".about_data", { origin: "left" });
sr.reveal(".about_img", { origin: "right" });

sr.reveal(".popular_card", { interval: 100 });

sr.reveal(".recently_img", { origin: "left" });
sr.reveal(".recently_data", { origin: "right" });

sr.reveal(".newsletter");
sr.reveal(".footer");
