import refs from './refs';
import 'jquery/dist/jquery.js';

import pagination from 'paginationjs/dist/pagination.js';
import { addMarkup, cleanMarkup } from './markup';
const key = '20294506-248ba45cdd61456c7439febce';

export default {
  searchQuery: '',
  page: 1,

  paginationImages() {
    refs.paginationNav.pagination({
      dataSource: `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${key}`,

      callback: function (data, pagination) {
        addMarkup(data);
      },
    });
  },

  get query() {
    return this.searchQuery;
  },
  set query(newQuery) {
    this.searchQuery = newQuery;
  },
};
