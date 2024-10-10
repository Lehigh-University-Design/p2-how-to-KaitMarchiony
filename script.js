var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu?.addEventListener('click',function(){
    Console.log ("Hello world");
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});