'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;


//Make navbar transparent when it is on the top
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {

    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
        return;
    }
    scrollIntoView(link);
});


//Handle scrolling when tapping on the Contact
const contactButton = document.querySelector('.home__contact');
contactButton.addEventListener('click', (event) => {
    scrollIntoView('#contact');
});


// Scrolling To be transparent
const homeMenu = document.querySelector('.home__container');
const homeHeight = homeMenu.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    homeMenu.style.opacity = 1 - window.scrollY / homeHeight;
});













function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}

