// side bar start

function openNav() {
  "use strict";
  const sidepanel = document.getElementById("mySidepanel");
  if (sidepanel) {
    sidepanel.style.left = "0";
  } else {
    console.error("error : sidepanel not found");
  }
}

const closeNav = () => {
  "use strict";
  const sidepanel = document.getElementById("mySidepanel");
  if (sidepanel) {
    sidepanel.style.left = "-320px";
  } else {
    console.error("error : sidepanel not found");
  }
};
const openNavRight = () => {
  "use strict";
  const navright = document.getElementById("right_side");
  if (navright) {
    navright.style.right = "0";
  } else {
    console.error("error : sidepanel not found");
  }
};
const closeNavRight = () => {
  "use strict";
  const navright = document.getElementById("right_side");
  if (navright) {
    navright.style.right = "-335px";
  } else {
    console.error("error : sidepanel not found");
  }
};
// search bar

const openSearch = () => {
  "use strict";
  const searchpanel = document.getElementById("search-bar");
  if (searchpanel) {
    searchpanel.style.height = "100vh";
    searchpanel.style.borderRadius = "0";
  } else {
    console.error("error : search panel not found");
  }
};

const closeSearch = () => {
  "use strict";
  const searchpanel = document.getElementById("search-bar");
  if (searchpanel) {
    searchpanel.style.height = "0";
    searchpanel.style.borderTopLeftRadius = "100%";
    searchpanel.style.borderTopRightRadius = "100%";
  } else {
    console.error("error : search panel not found");
  }
};

// portfolio gallary tab

function open_img(evt, cityName) {
  let i, tabcontent, tablinks;

  // hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  //remote active from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  //show the selectec tab content and mark the corresponding tab link
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

//responsive team slider

$(".team-slider").slick({
  arrows: false,
  dots: true,
  infinite: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll1: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll1: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll1: 1,
      },
    },
  ],
});

//FAQ section
document.addEventListener("DOMContentLoaded", function () {
  let accordionButtons = document.querySelectorAll(".accordion-button");
  let accimg = document.querySelectorAll(".accordion-button img");

  accordionButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      let collapse = this.parentElement.nextElementSibling;

      //close all  the other accordion item

      accordionButtons.forEach(function (otherButton, otherIndex) {
        if (otherButton != button) {
          let otherCollapse = otherButton.parentElement.nextElementSibling;
          otherCollapse.style.maxHeight = null;

          //reset the image source and rotaiton for other  accordion

          accimg[otherIndex].src = "./Images/icon/plus.png";
          accimg[otherIndex].style.transform = "rotate(0deg )";
          otherButton.style.backgroundColor = "#fff";
        }
      });
      //toggle the clicked according item
      if (collapse.style.maxHeight) {
        collapse.style.maxHeight = null;

        accimg[index].src = "./Images/icon/plus.png";
        accimg[index].style.transform = "rotate(90deg)";
        button.style.backgroundColor = "";
      } else {
        collapse.style.maxHeight = collapse.scrollHeight + "px";

        accimg[index].src = "./Images/icon/menus.png";
        accimg[index].style.transform = "rotate(180deg)";
        button.style.backgroundColor = "#c1b0b5";
      }
    });
  });
});

//footer validate

const fom = document.getElementById("footer-form");
const footerMessage = document.getElementById("footer-message");

fom.addEventListener("submit", (event) => {
  event.preventDefault();
  footerMessage.innerHTML = "~ Form sumbited successfully";
  footerMessage.style.display = "flex";
  fom.reset();

  setTimeout(() => {
    footerMessage.style.display = "none";
  }, 3000);
});

// button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  const scrollTop = document.documentElement || document.body;
  scrollTop.scrollIntoView({
    bahavior: "smooth",
  });
}

// responsive logoipsum slider

$(".slider-logo").slick({
  arrows: false,
  dots: false,
  infinite: false,
  autoplay: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll1: 1,
      },
    },
  ],
});
