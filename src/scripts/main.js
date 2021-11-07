'use strict';

const employ = document.querySelectorAll(`[data-salary]`);
const list = document.querySelector('ul');

function sortList(a, b) {
  const result = +b.dataset.salary
    .split('').splice(1).join('')
    .split(',').join('')
    - a.dataset.salary.split('')
      .splice(1).join('').split(',').join('');

  return result;
}

const sortAmploy = [...employ].sort(sortList);

sortAmploy.map(elem => {
  list.append(elem);
});
