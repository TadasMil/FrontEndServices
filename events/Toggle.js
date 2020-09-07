var hamburgerButton = document.querySelector('.toggle');
var mobileNav = document.querySelector('.nav-bar-mobile-links');

function openMobile(){
    mobileNav.classList.add('open');
}

function closeMobile(){
    mobileNav.classList.remove('open');
}

hamburgerButton.addEventListener('click', openMobile);
mobileNav.addEventListener('click', closeMobile);