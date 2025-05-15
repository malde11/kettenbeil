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

  const image = document.getElementById("test-id-1");
  if(image) {
    image.addEventListener("click", openModal, false);
  }

  const close = document.getElementsByClassName("close")[0];
  if(close) {
    close.addEventListener("click", closeModal, false);
  }







  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }


  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    // If the user clicks on the image, open the modal
    // and show the current slide
    if (n > slides.length) {
      slideIndex = 1;
    }

    
    if (n < 1) {
      slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Hide all dots
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide
    // and add an "active" class to the thumbnail image
    // that is clicked
    // Show the current slide
    // and add an "active" class to the thumbnail image
    // that is clicked
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }

});