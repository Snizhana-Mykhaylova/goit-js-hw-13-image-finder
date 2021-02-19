import bootstrap from 'bootstrap';
import baguetteBox from 'baguettebox.js';

import 'material-design-icons';
import './styles.scss';
import './js/apiService';

import apiService from './js/apiService';
import { addMarkup, cleanMarkup } from './js/markup';
import refs from './js/refs';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  cleanMarkup();

  apiService.resetPage();
  fetchImages();
  form.reset();
});

refs.loadMoreBtn.addEventListener('click', fetchImages);

function fetchImages() {
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spinner.classList.remove('is-hidden');

  apiService
    .fetchImages()
    .then(hits => {
      addMarkup(hits);
      baguetteBox.run('.gallery');
      refs.loadMoreBtn.classList.remove('is-hidden');
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .finally(() => refs.spinner.classList.add('is-hidden'));
}
