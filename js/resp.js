var burger = document.querySelector('.burger');
var navbar = document.querySelector('.navbar');
var rightNav = document.querySelector('.rightNav');
var navlist = document.querySelector('.nav-list');

burger.addEventListener('click', ()=> {
    navlist.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})