import _ from 'lodash';
import InfiniteScroll from 'infinite-scroll';
import {
  infoNotification,
  successNotification,
  errorNotification,
} from './notification';
import imageTemplate from '../templates/image.hbs';
import * as basicLightbox from 'basiclightbox';
import preloader from './preloader';

const refs = {
  input: document.querySelector('#form input'),
  gallery: document.querySelector('#container'),
};
const baseUrl = 'https://pixabay.com/api/';
const key = '14230040-8f4217119aa6e0fd5b0363ac7';
let query = '';

refs.input.addEventListener('input', _.debounce(searchImages, 500));

// function getRequest(value) {
//   query = `https://cors-anywhere.herokuapp.com/${baseUrl}?image_type=photo&orientation=horizontal&q=${value}&page=${infScroll.pageIndex}&per_page=12&key=${key}`;
// }

function searchImages(e) {
  const inputValue = e.target.value;
  refs.gallery.innerHTML = '';

  if (inputValue === '') {
    return;
  }

  console.log('input: ', inputValue);
  query = inputValue;
  infScroll.pageIndex = 1;

  // infScroll.option({
  //   path() {
  //     return `https://cors-anywhere.herokuapp.com/${baseUrl}?image_type=photo&orientation=horizontal&q=${query}&page=${this.pageIndex}&per_page=12&key=${key}`;
  //   },
  // });

  infScroll.loadNextPage();
}

const infScroll = new InfiniteScroll(refs.gallery, {
  responseType: 'text',
  path() {
    return 'index.html';
  },
  history: false,
});

infScroll.on('load', (response, path) => {
  console.log('path: ', path);
  const images = JSON.parse(response);
  const markup = images.hits.map(image => imageTemplate(image)).join('');
  const galleryBox = document.createElement('div');
  galleryBox.innerHTML = markup;

  infScroll.appendItems(galleryBox.querySelectorAll('.gallery-item'));
  createModal();
});

// Modal
function createModal() {
  const list = Array.from(document.querySelectorAll('.photo-card'));
  list.map(item => {
    const imgItem = document.querySelector(`#${item.id} img`);
    const src = imgItem.getAttribute('data-src');
    const modalItem = basicLightbox.create(
      `
      <img width="1400" height="900" src="${src}">
    `,
    );

    imgItem.onclick = () => {
      modalItem.show();
    };
  });
}
