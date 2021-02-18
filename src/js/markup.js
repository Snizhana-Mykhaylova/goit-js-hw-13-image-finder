import imageCardTpl from '../templates/images.hbs';
import refs from './refs';

function addMarkup(items) {
  let index = 0;
  const markup = imageCardTpl(items, index);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function cleanMarkup() {
  refs.gallery.innerHTML = '';
}

export { addMarkup, cleanMarkup };
