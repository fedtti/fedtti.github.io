/**
 * Change the menu button icon on user click.
 */
const navbarToggler = document.querySelector('#navbar-toggler');
const navbarTogglerIcon = document.querySelector('#navbar-toggler > i');
navbarToggler.addEventListener('click', () => {
  navbarToggler.getAttribute('aria-expanded') === 'false' ? (navbarToggler.setAttribute('aria-label', 'Expand the navigation menu'), navbarTogglerIcon.classList.add('fa-bars'), navbarTogglerIcon.classList.remove('fa-xmark')) : (navbarToggler.setAttribute('aria-label', 'Collapse the navigation menu'), navbarTogglerIcon.classList.add('fa-xmark'), navbarTogglerIcon.classList.remove('fa-bars'));
}, false);

/**
 * Change the header background color on user vertical scroll.
 */
window.onscroll = () => {
  const top = window.scrollY;
  const header = document.querySelector('#header');
  top >= 64 ? header.classList.add('bg-dark'): header.classList.remove('bg-dark');
};
