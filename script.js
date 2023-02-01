var humburger=document.querySelector(".hamb")
var links=document.querySelector(".nav-list")
var navlist=document.querySelector(".nav-list li")

humburger.addEventListener("click ",function(){
this.classList.toggle ("click ");
navlist.classList.toggle("open");   

});