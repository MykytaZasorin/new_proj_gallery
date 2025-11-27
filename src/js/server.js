import axios from 'axios';
import { teamplates, teamplate } from './render';

const listElem = document.querySelector('.server-list');

async function fetchData() {
  const baseURL = 'http://localhost:3000';
  const endPoint = '/cars';
  const url = baseURL + endPoint;

  const res = await axios.get(url);
  return res.data;
}

document.addEventListener('DOMContentLoaded', async e => {
  e.preventDefault();
  const result = await fetchData();
  const markup = teamplates(result);

  listElem.innerHTML = markup;
});

async function createCar(car) {
  const baseURL = 'http://localhost:3000';
  const endPoint = '/cars';
  const url = baseURL + endPoint;

  const res = await axios.post(url, car);
  return res.data;
}

const createFormElem = document.querySelector('.js-form-create');

createFormElem.addEventListener('submit', async e => {
  e.preventDefault();
  const boris = new FormData(createFormElem);
  const data = {
    brand: boris.get('post-brand'),
    model: boris.get('post-model'),
    year: boris.get('post-year'),
    price: boris.get('post-price'),
  };

  const newCar = await createCar(data);
  const markup = teamplate(newCar);
  listElem.insertAdjacentHTML('afterbegin', markup);
});
