export function teamplate(car) {
  return `<li class="list-item">
          <p>${car.brand}</p>
          <p>${car.model}</p>
          <p>${car.year}</p>
          <p>${car.price}</p>
        </li>`;
}

export function teamplates(cars) {
  return cars.map(teamplate).join('');
}
