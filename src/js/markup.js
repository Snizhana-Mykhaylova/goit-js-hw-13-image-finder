import imageCardTpl from '../templates/images.hbs';
import refs from './refs';

function addMarkup(items) {
  const markup = imageCardTpl(items);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function cleanMarkup() {
  refs.gallery.innerHTML = '';
}

export { addMarkup, cleanMarkup };
