// ----------------------------------------------------------------------
// Variables
const burgerMenu: Element = document.querySelector('.burger');
const navMenu: Element = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav li');

// ----------------------------------------------------------------------
// EventListeners
window.addEventListener('resize', getVH);
burgerMenu.addEventListener('click', openMobileMenu);

navLinks.forEach((item) => {
    item.addEventListener('click', closeMobileMenu);
});

// ----------------------------------------------------------------------
// Functions
function getVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function openMobileMenu() {
    navMenu.classList.toggle('nav-open');
    navLinkAnimate();
}

function closeMobileMenu() {
    navMenu.classList.remove('nav-open');
    navLinkAnimate();
}

function navLinkAnimate() {
    // stop animation when not in mobile view
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

// App Function
function app() {
    // Call all initial functions
    getVH();
}

app();
