"use strict";

/* Navbar active state */
window.addEventListener('DOMContentLoaded', ()=> {
// Grab the .nav-link whose href is the pathname
let activeLink = document.querySelector(".nav-link[href='" + window.location.pathname + "']");
// Set it to active. You want the if condition on the off chance there's 
// not a viable match.
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