'use strict';

import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.lightbox');
const overlay = document.querySelector('.lightbox__content');
const modalImg = document.querySelector('.lightbox___image');
const buttonClose = document.querySelector('.lightbox__button');

const createGalleryItem = ({ preview, original, description }) => {
  const item = `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />

        <span class="gallery__icon">
          <i class="material-icons">zoom_out_map</i>
        </span>
      </a>
    </li>
  `;
  return item;
};

const createGalleryItems = arr => {
  return arr.map(item => createGalleryItem(item)).join('');
};

gallery.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));
gallery.addEventListener('click', openModal);
buttonClose.addEventListener('click', closeModal);
overlay.addEventListener('click', handleOverlayClick);

// Functions for modal
function openModal(e) {
  e.preventDefault();
  const selectedEl = e.target;
  if (selectedEl.parentNode.tagName !== 'A') {
    return;
  }
  modalImg.setAttribute('src', selectedEl.dataset.source);
  modalImg.setAttribute('alt', selectedEl.getAttribute('alt'));
  modal.classList.add('is-open');
  window.addEventListener('keydown', handleEsc);
}

function closeModal() {
  modal.classList.remove('is-open');
  // modalImg.setAttribute('src', '');
  // modalImg.setAttribute('alt', '');
  window.removeEventListener('keydown', handleEsc);
}

function handleOverlayClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeModal();
}

function handleEsc(e) {
  if (e.code !== 'Escape') {
    return;
  }
  closeModal();
}
