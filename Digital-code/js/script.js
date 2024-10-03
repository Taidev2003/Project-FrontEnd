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

// responsive logoipsum slider

$(".slider-logo").slick({
  arrows: false,
  dots: false,
  infinite: false,
  autoplay: false,
  speed: 300,
  slidesToShow: 5,
  sliderToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        sliderToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        sliderToScroll1: 1,
      },
    },
  ],
});
