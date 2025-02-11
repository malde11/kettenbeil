"use strict";

addEventListener('load', ()=> {

    /* Hide Preloader */
    document.getElementById("loader-background").style.display = 'none';
    document.getElementById("loader").style.display = 'none';

});


addEventListener('DOMContentLoaded', ()=> {
  
  /* Navbar active state */
  const activeLink = document.querySelector(".nav-link[href='" + window.location.pathname + "']");
  if(activeLink) activeLink.classList.add("active");


  /* Burger-Menu toggle nav */
  const topNav      = document.getElementById("myTopnav");
  const burgerMenu  = document.getElementById("burgerMenu");
    
  burgerMenu.addEventListener("click", () => { 
    topNav.classList.toggle("responsive");
    burgerMenu.classList.toggle("toggleMenu");
    
  });

  /* Image Gallery */
    const imgs = document.getElementsByClassName("test").onclick = function() {

      const expandImg = document.getElementById("expandedImg");
      const imgText = document.getElementById("imgtext");
      
      expandImg.src = imgs.src;
      imgText.innerHTML = imgs.alt;
      expandImg.parentElement.style.display = "block";
  };

  const galleryBtn = document.getElementsByClassName("closebtn").onclick = function() {

    galleryBtn.parentElement.style.display='none';
  };
});