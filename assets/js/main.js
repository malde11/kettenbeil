"use strict";

/* Navbar active state */
window.addEventListener('DOMContentLoaded', ()=> {
  
  const activeLink = document.querySelector(".nav-link[href='" + window.location.pathname + "']");

  if(activeLink) activeLink.classList.add("active");

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
});