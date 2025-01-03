window.onload = function() {

  /* Burger menu toggle nav */
  const topNav      = document.getElementById("myTopnav");
  const burgerMenu  = document.getElementById("burgerMenu");

  burgerMenu.addEventListener("click", () => { topNav.classList.toggle("responsive"); });

};