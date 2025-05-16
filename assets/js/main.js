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



  // Image - Gallery
  function myFunction(image) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = image.src;
  imgText.innerHTML = image.alt;
  expandImg.parentElement.style.display = "block";
}

  const image = document.querySelector(".image-class");
  if(image) {
      image.addEventListener("click", function() {
        myFunction(image);
      });
  };

});