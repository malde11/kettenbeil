"use strict";

addEventListener("load", () => {
  /* Hide Preloader */
  const loaderBackground = document.getElementById("loader-background");
  const loader = document.getElementById("loader");

  // If the loader is present, hide it after a delay
  if (loaderBackground && loader) {
    // If on homepage, delay hiding for 5 seconds
    // Otherwise, hide immediately
    if (location.pathname === "/de/" || location.pathname === "/en/") {
      setTimeout(() => {
        loaderBackground.style.display = "none";
        loader.style.display = "none";
      }, 3000);
    } else {
      loaderBackground.style.display = "none";
      loader.style.display = "none";
    }
  }
});




addEventListener("DOMContentLoaded", () => {
  /* Navbar active state */
  const activeLink = document.querySelector(
    ".nav-link[href='" + window.location.pathname + "']"
  );

  if (activeLink) activeLink.classList.add("active");




  
  // ReCaptcha configuration
  const captcha = document.querySelector(".g-recaptcha").setAttribute("data-size", "compact");
  const actual_width = window.innerWidth;

  console.log(actual_width);

  if(actual_width >= 768 ) {
    const normal = document.querySelector(".g-recaptcha").setAttribute("data-size", "normal");
    }

  




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

  } else if (colorMeTwo) {

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






    // Form validation
    const firstName = document.getElementById("warn-first-name");
    const lastName = document.getElementById("warn-last-name");
    const email = document.getElementById("warn-email");
    const mobile = document.getElementById("warn-mobile");
    const reason = document.getElementById("warn-reason");
    const message = document.getElementById("warn-message");
    const recaptcha = document.querySelector(".warn-recaptcha");

    const form = document.getElementById("contact-form");
    const formShortcode = document.getElementById("contact-form-site");

    if(form || formShortcode ){
      firstName.style.display = "none";
      lastName.style.display = "none";
      email.style.display = "none";
      mobile.style.display = "none";
      reason.style.display = "none";
      message.style.display = "none";
      recaptcha.style.display = "none";
    }


    if (form) {
      form.addEventListener("submit", (e) => {

        let valid = true;

        // Validate reCaptcha
        if (typeof grecaptcha !== 'undefined') {
          var response = grecaptcha.getResponse();
          if (response.length === 0) {
            recaptcha.style.display = "block";
            valid = false;
          } else {
            recaptcha.style.display = "none";
          }
        }

        // Validate first name
        // allow umlauts and spaces, at least 2 characters
        if (!/^[a-zA-ZäöüÄÖÜß\s]{2,}$/.test(form.firstName.value)) {
          firstName.style.display = "block";
          form.firstName.style.borderColor = "red";
          valid = false;
        } else {
          firstName.style.display = "none";
          form.firstName.style.borderColor = "greenyellow";
        }
        

        // Validate last name
        if (!/^[a-zA-ZäöüÄÖÜß\s]{2,}$/.test(form.lastName.value)) {
          lastName.style.display = "block";
          form.lastName.style.borderColor = "red";
          valid = false;
        } else {
          lastName.style.display = "none";
          form.lastName.style.borderColor = "greenyellow";
        }

        // Validate email
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email.value)) {
          email.style.display = "block";
          form.email.style.borderColor = "red";
          valid = false;
        } else {
          email.style.display = "none";
          form.email.style.borderColor = "greenyellow";
        }

        // Validate mobile
        // not required, but if provided, must be numeric
        if (form.mobile.value && !/^\d+$/.test(form.mobile.value)) {
          mobile.style.display = "block";
          form.mobile.style.borderColor = "red";
          valid = false;
        } else {
          mobile.style.display = "none";
          form.mobile.style.borderColor = "greenyellow";
        }

        // Validate reason
        if (form.f_reason.value === "") {
          reason.style.display = "block";
          form.f_reason.style.borderColor = "red";
          valid = false;
        } else {
          reason.style.display = "none";
          form.f_reason.style.borderColor = "greenyellow";
        }

        // Validate message
        if (form.message.value.trim() === "") {
          message.style.display = "block";
          form.message.style.borderColor = "red";
          valid = false;
        } else {
          message.style.display = "none";
          form.message.style.borderColor = "greenyellow";
        }

        // If not valid, prevent form submission
        if (!valid) {
          e.preventDefault();
        }
      });
    }


  // Form validation for shortcodes
  if (formShortcode) {
    formShortcode.addEventListener("submit", (e) => {

      let valid = true;

      // Validate reCaptcha
      if (typeof grecaptcha !== 'undefined') {
        var response = grecaptcha.getResponse();
        if (response.length === 0) {
          recaptcha.style.display = "block";
          valid = false;
        } else {
            recaptcha.style.display = "none";
        }
      }

      // Validate first name
      if (!/^[a-zA-ZäöüÄÖÜß\s]{2,32}$/.test(formShortcode.firstName.value)) {
        firstName.style.display = "block";
        formShortcode.firstName.style.borderColor = "red";
        valid = false;
      } else {
        firstName.style.display = "none";
        formShortcode.firstName.style.borderColor = "greenyellow";
      }

      // Validate last name
      if (!/^[a-zA-ZäöüÄÖÜß\s]{2,32}$/.test(formShortcode.lastName.value)) {
        lastName.style.display = "block";
        formShortcode.lastName.style.borderColor = "red";
        valid = false;
      } else {
        lastName.style.display = "none";
        formShortcode.lastName.style.borderColor = "greenyellow";
      }

      // Validate email
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formShortcode.email.value)) {
        email.style.display = "block";
        formShortcode.email.style.borderColor = "red";
        valid = false;
      } else {
        email.style.display = "none";
        formShortcode.email.style.borderColor = "greenyellow";
      }

      // Validate mobile
      // not required, but if provided, must be numeric
      if (formShortcode.mobile.value && !/^\d+$/.test(formShortcode.mobile.value)) {
        mobile.style.display = "block";
        formShortcode.mobile.style.borderColor = "red";
        valid = false;
      } else {
        mobile.style.display = "none";
        formShortcode.mobile.style.borderColor = "greenyellow";
      }
      

      // Validate reason
      if (formShortcode.f_reason.value === "") {
        reason.style.display = "block";
        formShortcode.f_reason.style.borderColor = "red";
        valid = false;
      } else {
        reason.style.display = "none";
        formShortcode.f_reason.style.borderColor = "greenyellow";
      }

      // Validate message
      if (formShortcode.message.value.trim() === "") {
        message.style.display = "block";
        formShortcode.message.style.borderColor = "red";
        valid = false;
      } else {
        message.style.display = "none";
        formShortcode.message.style.borderColor = "greenyellow";
      }

      // If not valid, prevent form submission
      if (!valid) {
        e.preventDefault();
      }
    });
  }
  
  // Add event listener for the form reset button
  const resetButton = document.querySelector(".clear-button");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      // Hide all warning messages on reset
      firstName.style.display = "none";
      lastName.style.display = "none";
      email.style.display = "none";
      mobile.style.display = "none";
      reason.style.display = "none";
      message.style.display = "none";
      recaptcha.style.display = "none";

      // Reset border colors
      if(form) {
        form.firstName.style.borderColor = "";
        form.lastName.style.borderColor = "";
        form.email.style.borderColor = "";
        form.mobile.style.borderColor = "";
        form.f_reason.style.borderColor = "";
        form.message.style.borderColor = "";
      }
    });
  }

  // Add event listener for the form reset button in shortcodes
  const resetButtonShortcode = document.querySelector(".clear-button");
  if (resetButtonShortcode) {
    resetButtonShortcode.addEventListener("click", () => {
      // Hide all warning messages on reset
      firstName.style.display = "none";
      lastName.style.display = "none";
      email.style.display = "none";
      mobile.style.display = "none";
      reason.style.display = "none";
      message.style.display = "none";
      recaptcha.style.display = "none";

      // Reset border colors
      if(formShortcode) {
        formShortcode.firstName.style.borderColor = "";
        formShortcode.lastName.style.borderColor = "";
        formShortcode.email.style.borderColor = "";
        formShortcode.mobile.style.borderColor = "";
        formShortcode.f_reason.style.borderColor = "";
        formShortcode.message.style.borderColor = "";
      }
    });
  }
});