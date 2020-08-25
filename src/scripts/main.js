'use strict';

function sortList(emploeesList) {
  return emploeesList.sort((emploee1, emploee2) => {
    const first = (emploee1.getAttribute('data-salary'))
      .split('')
      .filter(item => !isNaN(Number(item)))
      .join('');

    const second = (emploee2.getAttribute('data-salary'))
      .split('')
      .filter(item => !isNaN(Number(item)))
      .join('');

    return Number(second) - Number(first);
  });
}

function getEmploees(emploeesList) {
  return emploeesList.map(emploee => ({
    name: emploee.innerText,
    ...emploee.dataset,
  }));
}

const list = [...document.querySelectorAll('li')];

document.querySelector('ul').append(...sortList(list));

getEmploees(list);
