/* script for toggle menu*/
var navlinks = document.getElementById("navlinks");
var showMenu;
var hideMenu;

function showMenu(){
    navlinks.style.right = "0";
}
function hideMenu(){
    navlinks.style.right = "-200px";
}/* script for toggle menu end here */


/* his code is for the arrow go up */
const arrow = document.querySelector(".arrow");

window.addEventListener("scroll", () =>{
    if (window.pageYOffset > 150) {
        arrow.classList.add("active");
    } else {
        arrow.classList.remove("active");
    }
})
/* End of code for arrow */