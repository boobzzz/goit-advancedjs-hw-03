const API_KEY = '49648507-d50f841642650241279dda9b6';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 9;

export function processSearchResults(query, { onStart, onSuccess, onError, onFinally }) {
  onStart();
  fetch(getFullUrl(query))
    .then(res => {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })
    .then(data => onSuccess(data.hits))
    .catch(err => onError())
    .finally(() => onFinally());
}

function getFullUrl(query) {
  return `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&per_page=${PER_PAGE}`;
}
