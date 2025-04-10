import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { processSearchResults } from './js/pixabay-api.js';
import { renderGallery, hideGallery } from './js/render-functions.js';
import { showSpinner, hideSpinner } from './js/spinner.js';
import { showMessage } from './js/messages.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery-link');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchQuery = new FormData(form).get('query');
  if (!searchQuery) {
    showMessage('no_query');
    return;
  }

  processSearchResults(searchQuery, {
    onStart: () => {
      hideGallery();
      showSpinner();
    },
    onSuccess: (images) => {
      renderGallery(images);
      lightbox.refresh();
    },
    onError: () => showMessage('failed'),
    onFinally: hideSpinner
  });
});

gallery.addEventListener('click', () => {
  lightbox.open();
});
