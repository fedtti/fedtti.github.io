import './../scss/main.scss';

const savedTheme: string | null = localStorage.getItem('theme');
const systemTheme: string = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
const themeSwitcher: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('#theme-switcher');
const themeSwitcherIcon: HTMLElement | null = document.querySelector<HTMLElement>('#theme-switcher-icon');

/**
 * Load a saved theme from the local storage on page loading (fallback to system settings).
 */
const loadTheme = (): void => {
  if (!!savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeSwitcherIcon!.setAttribute('title', `Switch to the ${savedTheme === 'light' ? 'dark' : 'light'} theme`);
    if (savedTheme === 'light') {
      themeSwitcherIcon!.classList.remove('fa-moon');
      themeSwitcherIcon!.classList.add('fa-sun');
    } else {
      themeSwitcherIcon!.classList.remove('fa-sun');
      themeSwitcherIcon!.classList.add('fa-moon');
    }
  } else if (!!systemTheme) {
    document.documentElement.setAttribute('data-theme', systemTheme);
    themeSwitcherIcon!.setAttribute('title', `Switch to the ${systemTheme === 'light' ? 'dark' : 'light'} theme`);
    if (systemTheme === 'light') {
      themeSwitcherIcon!.classList.remove('fa-moon');
      themeSwitcherIcon!.classList.add('fa-sun');
    } else {
      themeSwitcherIcon!.classList.remove('fa-sun');
      themeSwitcherIcon!.classList.add('fa-moon');
    }
  }
};

window.addEventListener('load', () => {
  loadTheme();
}, false);

/**
 * Switch the current theme between 'light' and 'dark' on user interaction.
 */
const themeSwitch = (): void => {
  const currentTheme: string | null = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeSwitcherIcon!.classList.remove('fa-sun');
    themeSwitcherIcon!.classList.add('fa-moon');
    themeSwitcherIcon!.setAttribute('title', 'Switch to the light theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeSwitcherIcon!.classList.remove('fa-moon');
    themeSwitcherIcon!.classList.add('fa-sun');
    themeSwitcherIcon!.setAttribute('title', 'Switch to the dark theme');
  }
};

themeSwitcher!.addEventListener('click', themeSwitch, false);
document.querySelector<HTMLSpanElement>('#current-year')!.innerText = new Date().getFullYear().toString(); // Show the current year.
