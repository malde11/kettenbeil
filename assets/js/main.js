"use strict";

addEventListener("load", () => {
  /* Hide Preloader */
  document.getElementById("loader-background").style.display = "none";
  document.getElementById("loader").style.display = "none";
});

addEventListener("DOMContentLoaded", () => {
  /* Navbar active state */
  const activeLink = document.querySelector(
    ".nav-link[href='" + window.location.pathname + "']"
  );
  if (activeLink) activeLink.classList.add("active");

  /* Burger-Menu toggle nav */
  const topNav = document.getElementById("myTopnav");
  const burgerMenu = document.getElementById("burgerMenu");

  burgerMenu.addEventListener("click", () => {
    topNav.classList.toggle("responsive");
    burgerMenu.classList.toggle("toggleMenu");
  });


   // Image lightbox/Gallery
  // Open the Modal
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }





  // Here I have got "test-id-1" how can I get id-2, id-3 and so on?
  // Maybe somehow with a parameter or a loop? 
  const image = document.getElementById("test-id-1");
  if(image) {
    image.addEventListener("click", openModal, false);
  }

 // Close the Modal
  const close = document.getElementsByClassName("close")[0];
  if(close) {
    close.addEventListener("click", closeModal, false);
  }
  

});