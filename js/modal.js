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
window.onclick = function(e){
  hideModalListener(e);
}

hideModalListener = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

showError = function(main,footer){
  initModal();
  document.getElementById("modal-body-text").innerHTML = main;
  document.getElementById("modal-footer-text").innerHTML = footer;
  modal.style.display="block";
}

showWait = function (description){  
  document.getElementById("modal-icon").src = "img/wait1.gif";
  document.getElementById("modal-icon").style.width = "35%";
  document.getElementById("modal-icon").style.height = "35%";
  document.getElementById("modal-body-text").innerHTML = description;  
  document.getElementById("modal-body-title").innerHTML = "Only a few seconds left";
  footer.style.display = "none";
  span.style.display = "none";
  window.onclick = function(){};
  modal.style.display="block";
}

initModal = function(){
  modal.style.display="none";
  document.getElementById("modal-icon").src = "img/error.svg";
  document.getElementById("modal-icon").style.width = "20%";
  document.getElementById("modal-icon").style.height = "20%"; 
  document.getElementById("modal-body-title").innerHTML = "Oh snap !";
  footer.style.display = "block";
  span.style.display = "block";
  window.onclick = function(e){
    hideModalListener(e);
  }
}