import bootstrap from 'bootstrap';
import baguetteBox from 'baguettebox.js';

import 'material-design-icons';
import './styles.scss';
import './js/apiService';

import apiService from './js/apiService';
import { addMarkup, cleanMarkup } from './js/markup';
import refs from './js/refs';
import pagination from './js/pagination';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  // apiService.query = form.elements.query.value;
  // cleanMarkup();

  // apiService.resetPage();
  // fetchImages();

  const searchQuery = form.elements.query.value;
  const trimSearchQuery = searchQuery.trim();

  if (!trimSearchQuery) {
    return;
  }

  pagination.paginationImages(searchQuery);
  form.reset();
});

// // Изображение догружаются при клике на кнопку loadMoreBtn
// // refs.loadMoreBtn.addEventListener('click', fetchImages);

// // рендериться следующя страница с изображениями
// refs.nextBtn.addEventListener('click', () => {
//   cleanMarkup();
//   fetchImages();
//   refs.previousBtn.classList.remove('disabled');
// });

// refs.previousBtn.addEventListener('click', fetchPrevImages);

// function fetchImages() {
//   // refs.loadMoreBtn.classList.add('is-hidden');
//   refs.paginationNav.classList.add('is-hidden');
//   refs.spinner.classList.remove('is-hidden');

//   apiService
//     .fetchImages()
//     .then(({ hits, total }) => {
//       addMarkup(hits);
//       pagination(total);
//       baguetteBox.run('.gallery');

//       // refs.loadMoreBtn.classList.remove('is-hidden');
//       refs.paginationNav.classList.remove('is-hidden');

//       window.scrollTo({
//         top: document.documentElement.offsetHeight,
//         behavior: 'smooth',
//       });
//     })
//     .finally(() => refs.spinner.classList.add('is-hidden'));
// }

// function fetchPrevImages() {
//   // refs.loadMoreBtn.classList.add('is-hidden');
//   refs.paginationNav.classList.add('is-hidden');
//   refs.spinner.classList.remove('is-hidden');

//   apiService
//     .fetchPrevImages()
//     .then(({ hits, total }) => {
//       addMarkup(hits);
//       baguetteBox.run('.gallery');

//       // refs.loadMoreBtn.classList.remove('is-hidden');
//       refs.paginationNav.classList.remove('is-hidden');

//       window.scrollTo({
//         top: document.documentElement.offsetHeight,
//         behavior: 'smooth',
//       });
//     })
//     .finally(() => refs.spinner.classList.add('is-hidden'));
// }
