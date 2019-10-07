import menuItems from './menu.json';
import menuItem from './templates/menu.hbs';
import './styles.css';

// ***** Create Menu
const menu = document.querySelector('#menu');

createMenu(menuItems);

function createMenu(arr) {
  const markup = arr.map(item => menuItem(item)).join('');
  menu.insertAdjacentHTML('beforeend', markup);
}

// ***** Create Theme Switcher
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const switchControl = document.querySelector('#theme-switch-control');
const theme = localStorage.getItem('theme');

// check localStorage and set selected theme
if (theme === Theme.DARK) {
  setDarkTheme(switchControl);
}

// selecting theme
switchControl.addEventListener('click', themeSwitch);

// switch themes
function themeSwitch(e) {
  const switchEl = e.target;
  if (switchEl.checked) {
    setDarkTheme(switchEl);
    return;
  }
  setLightTheme(switchEl);
}

// setting dark theme
function setDarkTheme(elem) {
  body.classList.remove(Theme.LIGHT);
  body.classList.add(Theme.DARK);
  elem.setAttribute('checked', true);
  localStorage.setItem('theme', Theme.DARK);
}

// setting light theme
function setLightTheme(elem) {
  body.classList.remove(Theme.DARK);
  body.classList.add(Theme.LIGHT);
  elem.removeAttribute('checked', '');
  localStorage.setItem('theme', Theme.LIGHT);
}
