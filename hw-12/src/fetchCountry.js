const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default function fetchCountry(country) {
  return fetch(baseUrl + country)
    .then(res => res.json())
    .then(data => {
      return data;
    });
}
