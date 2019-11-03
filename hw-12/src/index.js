import _ from 'lodash';
import fetchCountry from './fetchCountry';
import countriesTemplate from './templates/countries.hbs';
import countryTemplate from './templates/country.hbs';
import PNotify from 'pnotify/dist/es/PNotify';
import './styles.css';

PNotify.defaults.styling = 'bootstrap4';
PNotify.defaults.icons = 'fontawesome5';

const input = document.querySelector('input[name="city"]');
const countrySection = document.querySelector('#country');

input.addEventListener('input', _.debounce(getCountry, 500));

// Search country
function getCountry(e) {
  const inputValue = e.target.value;

  if (inputValue) {
    fetchCountry(inputValue)
      .then(data => {
        if (data.length > 10) {
          return PNotify.error({
            text: 'Too many maches found. Please enter a more specific query!',
          });
        }
        countrySection.innerHTML = '';
        createTemplate(data);
        showCountry();
      })
      .catch(error => {
        console.warn(error);
      });
  }
  return;
}

// Show country
function createTemplate(countries) {
  if (countries.length === 1) {
    const markup = countries.map(country => countryTemplate(country)).join('');
    return countrySection.insertAdjacentHTML('beforeend', markup);
  }
  const markup = countries.map(country => countriesTemplate(country)).join('');
  countrySection.insertAdjacentHTML('beforeend', markup);
}

function showCountry() {
  countrySection.classList.remove('is-hidden');
}
