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
    navMenu.classList.remove('open');
    scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navMenu = document.querySelector('.navbar__menu');
navbarToggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
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

// Show arrow button whee Scrolling down
const about = document.querySelector('#about');
const aboutHeight = about.getBoundingClientRect().height;
const arrowBtn = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {

    if (window.scrollY > homeHeight / 2) {
        arrowBtn.classList.add('visible');
    } else {
        arrowBtn.classList.remove('visible');
    }

});

// Arrow up click event
arrowBtn.addEventListener('click', () => {
    scrollIntoView('#home');
});

// Project Button Change
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }

    // Catagories Button when onclick selected
    const active = document.querySelector('.categories__btn.selected');
    if (active != null) {
        active.classList.remove('selected');
    }
    e.target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {

        projects.forEach((project) => {
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });

        projectContainer.classList.remove('anim-out');
    }, 300)

});








function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}

