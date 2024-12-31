window.onload=function() {

  const x = document.getElementById("myTopnav");
  const burger = document.getElementById("burger");

  console.log(burger);

  burger.addEventListener("click", () => {

    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    
  });

};