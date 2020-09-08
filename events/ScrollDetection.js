const navBar = document.querySelector(".home-header");
const navBarMobile = document.querySelector(".nav-bar-mobile");

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400 ){
        navBar.classList.add("nav-bar-scrolled");
        navBar.classList.remove('nav-bar-transparent');
        navBarMobile.classList.add("nav-bar-scrolled");
        navBarMobile.classList.remove('nav-bar-transparent');
    } 
    else {
        navBar.classList.remove("nav-bar-scrolled");
        navBar.classList.add("nav-bar-transparent");
        navBarMobile.classList.remove("nav-bar-scrolled");
        navBarMobile.classList.add('nav-bar-transparent');
        
    }
};