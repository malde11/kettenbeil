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



  // Scroll to top button
  // Get the element
  let topBtn = document.querySelector(".top-btn");

  // On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // On scroll, Show/Hide the btn with animation
  window.onscroll = () => topBtn.style.opacity = window.scrollY > 500 ? 1 : 0;

  


  // Image lightbox/Gallery
    const modal_container = document.getElementById("modal-container");

    // Open the Modal
    function openModel() {
        modal_container.style.display = "block";
    };

    // Close the Modal
    function closeModal() {
        modal_container.style.display = "none";
    };

    const next_button = document.getElementById("modal-next");
    const prev_button = document.getElementById("modal-prev");

    const galleryimages = document.getElementsByClassName("galleryimage");
    const modal_image = document.getElementById("modal-image");
    const modal_caption = document.getElementById("modal-caption");
    const modal_filmstrip = document.getElementById("modal-filmstrip");

    for (let i=0; i<galleryimages.length; i++) {
        galleryimages[i].addEventListener("click", (e) => {

            openModel();

            modal_image.src = e.target.dataset.image;
            modal_caption.innerText = e.target.alt;
            modal_filmstrip.innerHTML = e.target.parentElement.innerHTML;

            const filmstrip_images = modal_filmstrip.getElementsByClassName("galleryimage");

            for (let i=0; i<filmstrip_images.length; i++) {
                filmstrip_images[i].addEventListener("click", (e) => {

                    modal_image.src = e.target.dataset.image;
                    modal_caption.innerText = e.target.alt;
                });
            };
        });
    };

    const closebutton = document.getElementById("modal-close");
    closebutton.addEventListener("click", closeModal);

});