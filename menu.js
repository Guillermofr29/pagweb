const nav = document.querySelector(".navegacion")

window.addEventListener("scroll", function(){
nav.classList.toggle("active", window.scrollY >0)
})