const theme = document.documentElement;
const themeToggler = document.querySelector('#theme-toggler');
const themeTogglerIcon = document.querySelector('#theme-toggler > i');

/**
 * Set the light theme.
 */
const setLightTheme = () => {
  theme.setAttribute('data-theme', 'light')
  themeToggler.setAttribute('aria-label', 'Attiva il tema scuro');
  themeTogglerIcon.classList.remove('fa-sun');
  themeTogglerIcon.classList.add('fa-moon');
  themeTogglerIcon.setAttribute('title', 'Luna');
  localStorage.setItem('theme', 'light');
}

/**
 * Set the dark theme.
 */
const setDarkTheme = () => {
  theme.setAttribute('data-theme', 'dark');
  themeToggler.setAttribute('aria-label', 'Attiva il tema chiaro');
  themeTogglerIcon.classList.remove('fa-moon');
  themeTogglerIcon.classList.add('fa-sun');
  themeTogglerIcon.setAttribute('title', 'Sole');
  localStorage.setItem('theme', 'dark');
}

/**
 * Toggle the active theme.
 */
const themeToggle = () => {
  theme.getAttribute('data-theme') === 'light' ? setDarkTheme() : setLightTheme();
};
themeToggler.addEventListener('click', themeToggle, false);

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