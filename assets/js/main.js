"use strict";

window.onload = function() {

/* Preloader hide */
  const preloaderBg = document.getElementById("loader-background");
  const preloader   = document.getElementById("loader");

  const myTimeoutBg = setTimeout(preloaderBg, 5000);
  const myTimeout   = setTimeout(preloader, 5000);
  

  /* Burger menu toggle nav */
  const topNav      = document.getElementById("myTopnav");
  const burgerMenu  = document.getElementById("burgerMenu");
  
  burgerMenu.addEventListener("click", () => { 
    topNav.classList.toggle("responsive");
    burgerMenu.classList.toggle("toggleMenu");
  });

};