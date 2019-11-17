const preloader = document.querySelector('.preloader');

export default {
  show() {
    preloader.classList.remove('is-hidden');
  },
  hide() {
    preloader.classList.add('is-hidden');
  },
};
