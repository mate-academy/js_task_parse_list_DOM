'use strict';

const objectPeoples = document.querySelector('ul').children;

const result = [...objectPeoples].sort((men1, men2) => {
  const a = Number(men2.dataset.salary.replace(/[^0-9]+/g, ''));
  const b = Number(men1.dataset.salary.replace(/[^0-9]+/g, ''));

  return a - b;
});

document.querySelector('ul').replaceChildren(...result);
