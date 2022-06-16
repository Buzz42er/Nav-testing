//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//nav popup

const navHover = function navHover() {
  const nav = document.getElementById("nav");

  nav.style.transition = "all 1s";
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Menu button

const openNav = function openNav() {
  const menuButton = document.getElementById("menuButton");
  const nav = document.getElementById("nav");

  menuButton.addEventListener("click", function () {
    nav.style.height = "50px";
    console.log("to 50px");

    setTimeout(function navBackDown() {
      nav.style.height = "10px";
      console.log("to 10px");
    }, 600);
  });
};
