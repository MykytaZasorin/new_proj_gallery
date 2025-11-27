import axios from 'axios';

const formElem = document.querySelector('.js-form');
const listElem = document.querySelector('.js-gallery');

formElem.addEventListener('submit', async e => {
  e.preventDefault();
  listElem.innerHTML = '';
  const boris = new FormData(formElem);
  const inputElem = boris.get('search-text');
  try {
    const result = await fetchData(inputElem, 1);
    console.log(result);

    render(result.hits);
  } catch {
    console.log('Error');
  }
  formElem.reset();
});

async function fetchData(querry, page) {
  const baseURL = 'https://pixabay.com/api/';

  const params = {
    key: '53379684-45c44d339c561808b5ad44122',
    q: querry,
    page: page,
  };

  const res = await axios.get(baseURL, { params });
  return res.data;
}

function imgTeamplate(img) {
  return `<li>
          <img class="gallery-item" src="${img.previewURL}" width="${img.previewWidth}" height="${img.previewHeight}" />
          <div>
              <p>${img.views}</p>
              <p>${img.downloads}</p>
              <p>${img.likes}</p>
              <p>${img.comments}</p>
          </div>
        </li>`;
}

function imgTeamplates(images) {
  return images.map(imgTeamplate).join('');
}

function render(images) {
  const result = imgTeamplates(images);

  listElem.insertAdjacentHTML('afterbegin', result);
}
