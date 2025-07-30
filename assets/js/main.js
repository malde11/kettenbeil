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

  



  // Color headline contact
  const colorMe = document.getElementById("sei-nicht-schüchtern-sag-hallo");
  const colorMeTwo = document.getElementById("do-not-be-shy-say-hello");

  if (colorMe) {
    
    const splits = colorMe.innerText.split(" ");
    const colors = ["white", "#3defe9", "#6bd968", "white", "#fecc1b"];

    let spans = [];

    //for every word
    for (var x = 0; x < splits.length; x++) {
      //cycle through available colors by index number (i), using index of word (x) remainder when divided by length of color options array (mod)
      var i = x % colors.length;

      var color = colors[i];
      //wrap word with span
      var span = "<span class='contact-slug-de' style='color: " + color + ";'>" + splits[x] + "</span>";

      spans.push(span);
    }

    //replace words with spans
    colorMe.innerHTML = spans.join(" ");

  } else {

    const splitsTwo = colorMeTwo.innerText.split(" ");
    const colorsTwo = ["white", "#3defe9", "#6bd968", "white", "#fecc1b"];

    let spansTwo = [];

    //for every word
    for (var y = 0; y < splitsTwo.length; y++) {
      //cycle through available colors by index number (i), using index of word (x) remainder when divided by length of color options array (mod)
      var n = y % colorsTwo.length;

      var colorTwo = colorsTwo[n];
      //wrap word with span
      var spanTwo = "<span class='contact-slug-en' style='color: " + colorTwo + ";'>" + splitsTwo[y] + "</span>";

      //push the span into the spans array
      spansTwo.push(spanTwo);

    }
    //join the spans together with a space
    colorMeTwo.innerHTML = spansTwo.join(" ");
  }



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

    if (closebutton) {
        closebutton.addEventListener("click", closeModal);
    }

});