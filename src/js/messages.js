import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const MESSAGES = {
  not_found: 'Sorry, no images matching search query',
  no_query: 'Please, enter your search query',
  failed: 'Sorry, images failed to fetch',
}

export function showMessage(message) {
  iziToast.error({
    message: MESSAGES[message]
  });
}