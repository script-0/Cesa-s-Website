// Get the modal
var modal = document.getElementById("myModal");

var span = document.getElementById("modal-close");

var footer = document.getElementsByClassName("modal-footer")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

footer.onclick=function(){
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

showError = function(main,footer){
    document.getElementById("modal-body-text").innerHTML = main;
    document.getElementById("modal-footer-text").innerHTML = footer;
    modal.style.display="block";
}