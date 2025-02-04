"use strict";

window.onload = function() {

  /* Hide Preloader */
  document.getElementById("loader-background").style.display = 'none';
  document.getElementById("loader").style.display = 'none';

  
  /* Burger-Menu toggle nav */
  const topNav      = document.getElementById("myTopnav");
  const burgerMenu  = document.getElementById("burgerMenu");
  
  burgerMenu.addEventListener("click", () => { 
    topNav.classList.toggle("responsive");
    burgerMenu.classList.toggle("toggleMenu");
  });


  /* Navbar active state */
  const pathname = window.location.pathname;
  const pages    = ["logos", "sketches", "fotos", "tutorials", "kontakt"];

  for (let key in pages) {

    if (pathname.includes(pages[key])) {
      console.log(key, pages[key]);
      this.classList.add("active");
  
    } else if (this.classList.includes("active")) {
        this.classList.remove("active");
    }

  }

};
