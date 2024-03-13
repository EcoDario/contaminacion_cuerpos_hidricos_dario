// Used to toggle the menu on small screens when clicking on the menu button
function toggleNavResponsive() {
  var x = document.getElementById("navResponsive");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function toggleDivInformative(divId) {
  var modal = document.getElementById(divId);
  if (modal.style.display != "block") {
    modal.style.display = "block"
  } else {
    modal.style.display = "none"
  }
}
// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel()

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
}

