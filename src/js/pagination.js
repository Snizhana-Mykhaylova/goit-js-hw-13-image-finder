import refs from './refs';

import pagination from 'paginationjs/dist/pagination.js';
import { addMarkup, cleanMarkup } from './markup';
const key = '20294506-248ba45cdd61456c7439febce';

export default {
  paginationImages(searchQuery) {
    $('#pagination-container').pagination({
      dataSource: `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&key=${key}`,
      locator: 'hits',
      pageSize: 12,
      alias: {
        pageNumber: 'page',
      },

      totalNumberLocator: function (response) {
        // you can return totalNumber by analyzing response content
        return Math.floor(Math.random() * (1000 - 100)) + 100;
      },

      ajax: {
        beforeSend: function () {
          cleanMarkup();
        },
      },

      callback: function (data, pagination) {
        addMarkup(data);
      },
    });
  },
};
