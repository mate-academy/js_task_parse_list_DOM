/* eslint-disable max-len */
'use strict';

const list = document.querySelectorAll('li');
const ulElement = document.querySelector('ul');

const sorted = [...list].sort((a, b) => {
  const salaryOne = parseInt(a.dataset.salary.replace(/[^\w\s]/gi, ''));
  const salaryTwo = parseInt(b.dataset.salary.replace(/[^\w\s]/gi, ''));

  return salaryTwo - salaryOne;
});

list.forEach((li) => li.remove());

for (let i = 0; i < sorted.length; i++) {
  ulElement.append(sorted[i]);
}
