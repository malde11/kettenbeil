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
    const modal_container = document.getElementById("modal-container");

    // Open the Modal
    function openModel() {
        modal_container.style.display = "block";
    };

    // Close the Modal
    function closeModal() {
        modal_container.style.display = "none";
    };

    // Next/previous controls
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

    const closebutton = document.getElementById("modal-close")
    closebutton.addEventListener("click", closeModal)
    // other code you may want after
    
});









/*
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  const galleryimages = document.getElementsByClassName("galleryimage")
  for (let i=0; i<galleryimages.length; i++) {
      galleryimages[i].addEventListener("click", (e) => {
          openModal()
          currentSlide(parseInt(e.target.dataset.id))
      })
  }

  const miniimages = document.getElementsByClassName("demo")
  for (let i=0; i<miniimages.length; i++) {
      miniimages[i].addEventListener("click", (e) => {
          currentSlide(parseInt(e.target.dataset.id))
      })
  }

  const closebutton = document.getElementsByClassName("close")
  closebutton[0].addEventListener("click", (e) => {
      closeModal()
  })

  const previousbutton = document.getElementsByClassName("prev")
  previousbutton[0].addEventListener("click", (e) => {
      plusSlides(-1)
  })

  const nextbutton = document.getElementsByClassName("next")
  nextbutton[0].addEventListener("click", (e) => {
      plusSlides(1)
  })
*/