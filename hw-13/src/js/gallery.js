import _ from 'lodash';
import {
  infoNotification,
  successNotification,
  errorNotification,
} from './notification';
import imageTemplate from '../templates/image.hbs';
import * as basicLightbox from 'basiclightbox';
import imageService from './services/image-service';
import preloader from './preloader';

const refs = {
  input: document.querySelector('#search-form input'),
  gallery: document.querySelector('#gallery'),
  loadMoreButton: document.querySelector('.button-load'),
};

refs.input.addEventListener('input', _.debounce(searchImages, 500));
refs.loadMoreButton.addEventListener('click', loadMore);

// Functions
function searchImages(e) {
  const inputValue = e.target.value;
  clearGallery();
  imageService.resetPage();
  if (inputValue === '') {
    refs.loadMoreButton.classList.remove('active');
    return;
  }
  imageService.query = inputValue;
  getQuery();
}

function getQuery() {
  preloader.show();
  imageService
    .fetchImages()
    .then(images => {
      if (images.length === 0) {
        infoNotification();
        preloader.hide();
        return;
      }
      successNotification();
      preloader.hide();
      createGalleryItems(images);
      pageScroll();
      refs.loadMoreButton.classList.add('active');
    })
    .catch(err => {
      errorNotification();
      preloader.hide();
      console.error(err);
    });
}

// Template
function createGalleryItems(images) {
  const markup = images.map(item => imageTemplate(item)).join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  createModal();
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}

// Load more button
function loadMore() {
  getQuery();
}

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

// Scroll
function pageScroll() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}
