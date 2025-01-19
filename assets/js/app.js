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

/**
 *
 */


document.getElementById('current-year').innerText = new Date().getFullYear(); // Show the current year.
