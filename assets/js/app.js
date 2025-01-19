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
const themeSwitcher = document.getElementById('theme-switcher');
const themeSwitcherIcon = document.getElementById('theme-switcher-icon');

/**
 * Load a saved theme from the local storage on page loading.
 */
const loadTheme = () => {
  if (!!savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (savedTheme === 'light') {
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
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeSwitcherIcon.classList.remove('fa-sun');
    themeSwitcherIcon.classList.add('fa-moon');
  }
};
themeSwitcher.addEventListener('click', themeSwitch, false);

document.getElementById('current-year').innerText = new Date().getFullYear(); // Show the current year.
