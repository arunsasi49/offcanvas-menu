// DOM Elements
const navToggler = document.querySelector('.nav-toggler');
const menuOffcanvas = document.querySelector('.nav-side');

// Function
navToggler.addEventListener('click', offcanvasMenu);

// Functin Defenition
function offcanvasMenu() {
    navToggler.classList.toggle('active');
    menuOffcanvas.classList.toggle('nav-open');

    const togglerEl = navToggler;
    const offcanvasEl = menuOffcanvas;
    document.addEventListener('click', function (event) {
        let isToggle = togglerEl.contains(event.target);
        let isMenubody = offcanvasEl.contains(event.target);

        if (!isToggle && !isMenubody) {
            // remove sidebar on outside click
            navToggler.classList.remove('active');
            menuOffcanvas.classList.remove('nav-open');
        }

    });

}