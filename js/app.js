/**
 *
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
  top >= 64 ? header.classList.add('bg-dark'): header.classList.remove('bg-dark'); // TODO: @fedtti - Handle theme change.
};

const theme = document.documentElement;
const themeToggler = document.querySelector('#theme-toggler');
const themeTogglerIcon = document.querySelector('#theme-toggler > i');

/**
 * Set the light theme.
 */
const setLightTheme = () => {
  theme.setAttribute('data-theme', 'light')
  themeToggler.setAttribute('aria-label', 'Enable dark theme');
  themeTogglerIcon.classList.remove('fa-sun');
  themeTogglerIcon.classList.add('fa-moon');
  themeTogglerIcon.setAttribute('title', 'Moon');
  localStorage.setItem('theme', 'light');
}

/**
 * Set the dark theme.
 */
const setDarkTheme = () => {
  theme.setAttribute('data-theme', 'dark');
  themeToggler.setAttribute('aria-label', 'Enable light theme');
  themeTogglerIcon.classList.remove('fa-moon');
  themeTogglerIcon.classList.add('fa-sun');
  themeTogglerIcon.setAttribute('title', 'Sun');
  localStorage.setItem('theme', 'dark');
}

/**
 * Toggle the active theme.
 */
const themeToggle = () => {
  theme.getAttribute('data-theme') === 'light' ? setDarkTheme() : setLightTheme();
};
// themeToggler.addEventListener('click', themeToggle, false);

/**
 * Load the saved theme (if any), the system theme or fallback to the light theme.
 */
const themeLoader = () => {
  const savedTheme = !!localStorage.getItem('theme') ? localStorage.getItem('theme') : 0;
  if (!!savedTheme) {
    savedTheme === 'light' ? setLightTheme() : setDarkTheme();
  } else if (!!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
};
window.addEventListener('load', themeLoader, false);
