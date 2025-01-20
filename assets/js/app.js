/**
 * Handle the scrolling event by updating the progress bar on user interaction.
 */
const scrollBarHandler = () => {
  const windowScrolling = document.documentElement.scrollTop;
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const windowScrolled = !!windowScrolling && windowScrolling !== 0 ? Math.round((windowScrolling / windowHeight) * 100) : 0;
  const scrollBar = document.getElementById('scrollbar');
  scrollBar.value = windowScrolled;
  scrollBar.innerText = !!windowScrolled && windowScrolled !== 0 ? `${windowScrolled}%` : '0%';
};
window.onscroll = scrollBarHandler;

const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
const themeSwitcher = document.getElementById('theme-switcher');
const themeSwitcherIcon = document.getElementById('theme-switcher-icon');

/**
 * Load a saved theme from the local storage on page loading (fallback to system settings).
 */
const loadTheme = () => {
  if (!!savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeSwitcherIcon.setAttribute('title', `Switch to the ${savedTheme === 'light' ? 'dark' : 'light'} theme`);

    if (savedTheme === 'light') {
      themeSwitcherIcon.classList.remove('fa-sun');
      themeSwitcherIcon.classList.add('fa-moon');
    } else {
      themeSwitcherIcon.classList.remove('fa-moon');
      themeSwitcherIcon.classList.add('fa-sun');
    }
  } else if (!!systemTheme) {
    document.documentElement.setAttribute('data-theme', systemTheme);
    themeSwitcherIcon.setAttribute('title', `Switch to the ${systemTheme === 'light' ? 'dark' : 'light'} theme`);

    if (systemTheme === 'light') {
      themeSwitcherIcon.classList.remove('fa-sun');
      themeSwitcherIcon.classList.add('fa-moon');
    } else {
      themeSwitcherIcon.classList.remove('fa-moon');
      themeSwitcherIcon.classList.add('fa-sun');
    }
  }
};
window.onload = loadTheme;

/**
 * Switch the current theme between 'light' and 'dark' on user interaction.
 */
const themeSwitch = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');

  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeSwitcherIcon.classList.remove('fa-moon');
    themeSwitcherIcon.classList.add('fa-sun');
    themeSwitcherIcon.setAttribute('title', 'Switch to the light theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeSwitcherIcon.classList.remove('fa-sun');
    themeSwitcherIcon.classList.add('fa-moon');
    themeSwitcherIcon.setAttribute('title', 'Switch to the dark theme');
  }
};
themeSwitcher.addEventListener('click', themeSwitch, false);

const navigation = document.getElementById('navigation');
const navigationToggler = document.getElementById('navigation-toggler');
const navigationTogglerIcon = document.getElementById('navigation-toggler-icon');

/**
 * Toggle the current navigation menu position down or up on user interaction.
 */
const navigationToggle = () => {
  if (navigation.classList.contains('collapsed')) {
    navigation.style.top = '9.8rem';
    navigation.classList.remove('collapsed');
    navigation.classList.add('expanded');
    navigationToggler.setAttribute('aria-expanded', 'true');
    navigationTogglerIcon.classList.remove('fa-bars');
    navigationTogglerIcon.classList.add('fa-xmark');
    navigationTogglerIcon.setAttribute('title', 'Collapse the navigation menu');
  } else {
    navigation.style.top = '0';
    navigation.classList.remove('expanded');
    navigation.classList.add('collapsed');
    navigationToggler.setAttribute('aria-expanded', 'false');
    navigationTogglerIcon.classList.remove('fa-xmark');
    navigationTogglerIcon.classList.add('fa-bars');
    navigationTogglerIcon.setAttribute('title', 'Expand the navigation menu');
  }
};
navigationToggler.addEventListener('click', navigationToggle, false);

document.getElementById('current-year').innerText = new Date().getFullYear(); // Show the current year.
