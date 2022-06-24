//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//nav popup

const Nav = document.getElementById("Nav");

   
Nav.addEventListener("mouseover", up)
Nav.addEventListener("mouseout", down)


function up () {
console.log("hovered")

document.getElementById("Nav").style.transition = "all 1s";
document.getElementById("Nav").style.height = "80px";
}

function down() {
console.log('out')

document.getElementById("Nav").style.transition = "all 1s";
document.getElementById("Nav").style.height = "10px";
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Menu button

const openNav = function openNav() {
const menuButton = document.getElementById("menuButton");
const Nav = document.getElementById("Nav");

document.getElementById("Nav").style.transition = "all 1s";
document.getElementById("Nav").style.height = "50px";
console.log("to 50px");

setTimeout(function navBackDown() {
  document.getElementById("Nav").style.transition = "all 1s";
  document.getElementById("Nav").style.height = "10px";
  console.log("to 10px");
}, 600);

};



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
