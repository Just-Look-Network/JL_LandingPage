// ----------------------------------------------------------------------
// Variables
const navigation: Element = document.querySelector('.navigation');
const burgerMenu: Element = document.querySelector('.burger');
const navMenu: Element = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav li');

// ----------------------------------------------------------------------
// EventListeners
window.addEventListener('resize', getVH);
burgerMenu.addEventListener('click', openMobileMenu);
navLinks.forEach((item) => item.addEventListener('click', closeMobileMenu));

// ----------------------------------------------------------------------
// Functions
function getVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function scrollSpy() {
    window.onscroll = () => {
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollPos > 75) {
            navigation.classList.add('navigation-scroll');
        } else {
            navigation.classList.remove('navigation-scroll');
        }
    };
}

function openMobileMenu() {
    navMenu.classList.toggle('nav-open');
    burgerMenu.classList.toggle('toggle');
    navLinkAnimate();
}

function closeMobileMenu() {
    navMenu.classList.remove('nav-open');
    burgerMenu.classList.remove('toggle');
    navLinkAnimate();
}

function navLinkAnimate() {
    if (window.innerWidth <= 576) {
        navLinks.forEach((link: HTMLElement, index: number) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navItemAnim 0.5s ease forwards ${index / 7 + 0.25}s`;
            }
        });
    }
}

// ----------------------------------------------------------------------
// App Functions
function app() {
    getVH();
    scrollSpy();
}

app();
