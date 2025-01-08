window.onload = function() {

  /* Burger menu toggle nav */
  const topNav      = document.getElementById("myTopnav");
  const burgerMenu  = document.getElementById("burgerMenu");
  
  burgerMenu.addEventListener("click", () => { 
    topNav.classList.toggle("responsive");
    burgerMenu.classList.toggle("toggleMenu");
  });



  /* Homepage Video switch */
  const mainVideo = document.getElementById('myVideo');
  const medi      = "/videos/ground_540p.mp4";
  const large     = "/videos/ground_1080p.mp4";

    switch ( true ) {
      case window.innerWidth >= 1080:
        mainVideo.append("<source type='video/mp4' src='" + large + "' />");
        break;

      case window.innerWidth >= 720:
        mainVideo.append("<source type='video/mp4' src='" + medi + "' />");
        break;
    }

};