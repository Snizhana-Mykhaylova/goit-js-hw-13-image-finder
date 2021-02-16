import './styles.scss';
import './js/apiService';
import 'material-design-icons';

import apiService from './js/apiService';
import { addMarkup, cleanMarkup } from './js/markup';
import refs from './js/refs';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  apiService.resetPage();
  cleanMarkup();
  form.reset();

  apiService.fetchImages().then(hits => addMarkup(hits));
});

refs.loadMoreBtn.addEventListener('click', event => {
  apiService.fetchImages().then(hits => addMarkup(hits));
});
