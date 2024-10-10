


document.addEventListener('DOMContentLoaded', function() {  // Added this to the DOMContentLoaded event listener
  var burgerMenu = document.getElementById('burger-menu');
  var overlay = document.getElementById('menu');
  burgerMenu?.addEventListener('click', function() {
    console.log("Hello world");
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });
});